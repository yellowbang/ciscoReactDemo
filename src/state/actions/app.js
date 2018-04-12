import api from '../../common/api';
import util from '../../common/util';

const TOGGLE_SIDEBAR = 'toggleSidebar';
const ON_TILE_CLICK = 'onTileClicked';
const CAN_WE_TALK = 'canWeTalk';
const OPEN_TALK_PAGE = 'openTalkPage';
const CLOSE_TALK_PAGE = 'closeTalkPage';
const OPEN_HOW_THEY_TALK_PAGE = 'openHowTheyTalkPage';
const CLOSE_HOW_THEY_TALK_PAGE = 'closeHowTheyTalkPage';
const POPULATE_TILES = 'polulateTiles';
import constants from '../../constants';

let appActions = function(dispatch) {

    function fakeCheckCanTalk (selectedTiles) {
        return (selectedTiles[0].name !== selectedTiles[1].name) ? 'yes' : 'no';
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
            tilesData.push({name, tenant, endPoints, allData});
        });
        return tilesData;
    }

    return {
        toggleSidebar: () => {
            dispatch({type: TOGGLE_SIDEBAR});
        },
        onTileClicked: (tileData) => {
            dispatch({
                type: ON_TILE_CLICK,
                payload: {tileData}
            });
        },
        canWeTalk: (selectedTiles) => {
            dispatch({
                type: CAN_WE_TALK,
                payload: {canTalkStatus: fakeCheckCanTalk(selectedTiles)}
            });
        },
        howTheyTalk: (item1, item2) => {
            fetch('http://172.31.219.91:5000/how?model=demo&from=epg51&to=epg61&pivot=&filter=&through=dp_from:161%20dp_to:161', {
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
        getData: () => {
            fetch('http://172.31.219.91:5000/what?model=demo&associated_to=&tile_type=N_EPG', {
                method: 'GET',
                mode: 'cors',
                header: {
                    'Access-Control-Allow-Origin': '*'
                }
            })
                .then((response) => {
                    dispatch({
                        type: POPULATE_TILES,
                        payload: {tiles: processData(response.response.tiles.data)}
                    });
                })
                .catch(() => {
                    let data = constants.MOCK_DATA;
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
    ON_TILE_CLICK,
    CAN_WE_TALK,
    OPEN_TALK_PAGE,
    CLOSE_TALK_PAGE,
    OPEN_HOW_THEY_TALK_PAGE,
    CLOSE_HOW_THEY_TALK_PAGE,
    TOGGLE_SIDEBAR
};
