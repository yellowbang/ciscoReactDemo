import api from '../../common/api';
import util from '../../common/util';
import $ from 'jquery';

const TOGGLE_SIDEBAR = 'toggleSidebar';
const ON_TILE_CLICKED = 'onTileClicked';
const ON_TILE_NUMBER_CLICKED = 'onTileNumberClicked';
const CAN_WE_TALK = 'canWeTalk';
const OPEN_TALK_PAGE = 'openTalkPage';
const CLOSE_TALK_PAGE = 'closeTalkPage';
const OPEN_HOW_THEY_TALK_PAGE = 'openHowTheyTalkPage';
const CLOSE_HOW_THEY_TALK_PAGE = 'closeHowTheyTalkPage';
const POPULATE_TILES = 'polulateTiles';
import constants from '../../constants';

let appActions = function(dispatch) {

    function processCanWeTalk (fullResponse) {

        let response = fullResponse.response;
        let chordData = [];
        let toEpgIndexes = {};
        let fromEpgIndexes = {};
        let fromEpgMap = {};
        let toEpgMap = {};

        let getGaugeData = function(dn, allEpgs, reachableEpgs) {
            let name = util.getNameByDn(dn);
            let nonReachableEpgs = [];
            reachableEpgs.forEach(function(epg) {
                if (allEpgs.indexOf(epg) === -1) {
                    nonReachableEpgs.push(epg);
                }
            });
            return {name, allEpgs, reachableEpgs, nonReachableEpgs};
        };
        let gaugesData = {
            gauge1Data: getGaugeData(fullResponse.from_str, response.step1.from, response.step1.reachability.from_connected),
            gauge2Data: getGaugeData(fullResponse.to_str, response.step1.to, response.step1.reachability.to_connected)
        };

        response.step1.reachability.to_connected.forEach(function(dn, index) {
            toEpgMap[dn] = [];
            toEpgIndexes[dn] = index;
        });
        response.step1.reachability.from_connected.forEach(function(dn, index) {
            fromEpgMap[dn] = [];
            fromEpgIndexes[dn] = index + response.step1.reachability.to_connected.length;
            response.step1.reachability[dn].to.forEach(function(toEpg) {
                toEpgMap[toEpg].push(fromEpgIndexes[dn].toString());
                fromEpgMap[dn].push(toEpgIndexes[toEpg].toString());
            });
        });
        response.step1.reachability.to_connected.forEach(function(dn) {
            let index = toEpgIndexes[dn].toString();
            let label = util.getNameByDn(dn);
            chordData.push({
                color: 'blue',
                dn: dn,
                label: label,
                from: index,
                to: toEpgMap[dn]
            });
            toEpgIndexes[label] = index.toString();
        });
        response.step1.reachability.from_connected.forEach(function(dn) {
            let index = fromEpgIndexes[dn].toString();
            let label = util.getNameByDn(dn);
            chordData.push({
                color: 'orange',
                dn: dn,
                label: label,
                from: index,
                to: fromEpgMap[dn]
            });
        });

        return {
            canTalkStatus: (response.step1.reachability.reachable) ? 'yes' : 'no',
            gaugesData: gaugesData,
            chordData: chordData
        };
    }

    function processData (data) {
        let tilesData = [];
        let arr, allData, name, tenant, endPoints;
        let dns = Object.keys(data);
        dns.forEach(function(dn) {
            name = util.getNameByDn(dn);
            tenant = util.getNameByDn(dn, 2);
            endPoints = data[dn].N_EP.count;
            allData = data[dn];
            tilesData.push({dn, name, tenant, endPoints, allData});
        });
        return tilesData;
    }

    return {
        toggleSidebar: () => {
            dispatch({type: TOGGLE_SIDEBAR});
        },
        onTileClicked: (tileData) => {
            dispatch({
                type: ON_TILE_CLICKED,
                payload: {tileData}
            });
        },
        onTileNumberClicked: (data) => {
            let dns = [];
            data.forEach(function(dn) {
                dns.push({dn});
            });
            dispatch({
                type: ON_TILE_NUMBER_CLICKED,
                payload: {data: dns}
            });
        },
        canWeTalk: (selectedTiles) => {
            $.ajax({
                url: 'http://172.31.219.91:5000/which?model=demo&from=' + selectedTiles[0].dn + '&to=' + selectedTiles[1].dn + '&pivot=&filter=&through',
                dataType: 'json',
                cache: false,
                success: function(response) {
                    dispatch({
                        type: CAN_WE_TALK,
                        payload: processCanWeTalk(response)
                    });
                },
                error: function(xhr, status, err) {
                    console.log(err);
                }
            });
        },
        canWeTalk2: (selectedTiles) => {
            fetch('http://172.31.219.91:5000/which?model=demo&from=' + selectedTiles[0].dn + '&to=' + selectedTiles[1].dn + '&pivot=&filter=&through', {
                method: 'GET',
                headers: {
                    Accept: 'application/json, text/javascript, */*'
                }
            })
                .then((response) => {
                    dispatch({
                        type: CAN_WE_TALK,
                        payload: processCanWeTalk(response)
                    });
                })
                .catch(() => {
                    let response = constants.MOCK_CHORD_DATA.response;
                    dispatch({
                        type: CAN_WE_TALK,
                        payload: processCanWeTalk(response)
                    });
                });
        },
        howTheyTalk: (items) => {
            $.ajax({
                url: 'http://172.31.219.91:5000/how?model=demo&from=' + items[0] + '&to=' + items[1] + '&pivot=&filter=&through=',
                dataType: 'json',
                cache: false,
                success: function(response) {
                    dispatch({
                        type: OPEN_HOW_THEY_TALK_PAGE,
                        payload: {data: response.response}
                    });
                },
                error: function(xhr, status, err) {
                    console.log(err);
                }
            });
        },
        howTheyTalk2: (items) => {
            fetch('http://172.31.219.91:5000/how?model=demo&from=' + items[0] + '&to=' + items[1] + '&pivot=&filter=&through=dp_from:161%20dp_to:161', {
                method: 'GET'
            })
                .then((response) => {
                    dispatch({
                        type: OPEN_HOW_THEY_TALK_PAGE,
                        payload: {data: response.response}
                    });
                })
                .catch(() => {
                    let data = constants.MOCK_HOW_THEY_TALK;
                    dispatch({
                        type: OPEN_HOW_THEY_TALK_PAGE,
                        payload: {data: data.response}
                    });
                });
        },
        closeHowTheyTalkPage: () => {
            dispatch({
                type: CLOSE_HOW_THEY_TALK_PAGE
            });
        },
        openTalkPage: () => {
            dispatch({type: OPEN_TALK_PAGE});
        },
        closeTalkPage: () => {
            dispatch({type: CLOSE_TALK_PAGE});
        },
        getTileData: () => {
            $.ajax({
                url: 'http://172.31.219.91:5000/what?model=demo&associated_to=&tile_type=N_VRF',
                dataType: 'json',
                cache: false,
                success: function(response) {
                    dispatch({
                        type: POPULATE_TILES,
                        payload: {tiles: processData(response.response.tiles.data)}
                    });
                },
                error: function(xhr, status, err) {
                    console.log(err);
                }
            });
        },
        getTileData2: () => {
            return fetch('http://172.31.219.91:5000/what?model=demo&associated_to=&tile_type=N_VRF', {
                method: 'GET',
                cache: 'no-cache',
                headers: {
                    'Accept': 'application/json, text/javascript, */*'
                }
            })
                .then((response) => {
                    dispatch({
                        type: POPULATE_TILES,
                        payload: {tiles: processData(response.response.tiles.data)}
                    });
                })
                .catch((error) => {
                    console.log(error);
                    let data = constants.MOCK_DATA_EPG;
                    dispatch({
                        type: POPULATE_TILES,
                        payload: {tiles: processData(data.response.tiles.data)}
                    });
                });
        }
    };
};

export {
    appActions,
    POPULATE_TILES,
    ON_TILE_CLICKED,
    ON_TILE_NUMBER_CLICKED,
    CAN_WE_TALK,
    OPEN_TALK_PAGE,
    CLOSE_TALK_PAGE,
    OPEN_HOW_THEY_TALK_PAGE,
    CLOSE_HOW_THEY_TALK_PAGE,
    TOGGLE_SIDEBAR
};
