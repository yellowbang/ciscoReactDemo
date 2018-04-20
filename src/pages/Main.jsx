import React from 'react';
import PropTypes from 'prop-types';

import {Button} from 'cisco-ui-components';
import Tile from '../components/Tile.jsx';
import {ListView, ListViewItem} from 'react-scrollable-list-view';
import CustomTypeahead from '../components/CustomTypeahead';

import constants from '../constants';
import util from '../common/util';

import './Main.scss';

class Main extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {};
        this.onClickRunButton = this.onClickRunButton.bind(this);
        this.canWeTalk = this.canWeTalk.bind(this);
    }

    onClickRunButton () {
        let url = constants.MOCK_SERVER_URL;
        let searchText = this.typeahead.getValue();
        let queryType;
        let tokens = searchText.split(' ');
        let method = tokens[0];

        //TODO:remove
        switch (method.toLowerCase()) {
            case 'what':
                this.props.getTileDataWhat(util.getDemoUrl(searchText));
                break;
            case 'can':
                this.props.getTileDataCan(util.getDemoUrl(searchText));
                break;
            default:
                break;
        }

        // switch (method.toLowerCase()) {
        //     case 'what':
        //         queryType = 'N_' + tokens[1].slice(0, -1);
        //         url = url + 'what?model=' + this.props.model + '&&tile_type=' + queryType + '&associated_to=';
        //         this.props.getTileDataWhat(url);
        //         break;
        //     case 'can':
        //         if (searchText === 'Can EPG:epg51 talk to EPG:epg61') {
        //             this.props.getTileDataCan('epg51', 'epg61');
        //         } else {
        //             this.props.getTileDataCan('epg51', 'epg52');
        //         }
        //         break;
        //     default:
        //         break;
        // }
    }

    canWeTalk () {
        this.props.canWeTalk(this.props.selectedTiles);
    }

    shouldComponentUpdate (nextProps) {
        return true;
    }

    render () {
        let me = this;
        let tiles = [];

        this.props.tiles.forEach(function(data, i) {
            tiles.push(<ListViewItem height={90} key={i}>
                <Tile
                    data={data}
                    selectedTiles={me.props.selectedTiles}
                    onTileClicked={me.props.onTileClicked}
                    onTileNumberClicked={me.props.onTileNumberClicked}
                    onShowEps={me.props.onShowEps}
                />
            </ListViewItem>);
        });

        let selectedTile1 = this.props.selectedTiles[0];
        let selectedTile2 = this.props.selectedTiles[1];
        let selectedTile1Name, selectedTile2Name;
        if (selectedTile1) {
            selectedTile1Name = selectedTile1.name;
        }
        if (selectedTile2) {
            selectedTile2Name = selectedTile2.name;
        }

        let helpText = (
            <div className="selected-tile-status-text">
                <span className="text-grey">{selectedTile1Name}</span>
                {'Select two items to see if they can talk and if so who can talk'}
            </div>
        );

        let oneTileSelectStatus = (
            <div className="selected-tile-status-text">
                <span className="text-bold">{selectedTile1Name}</span>
                {' is selected'}
            </div>
        );

        let twoTilesSelectStatus = (
            <div className="selected-tile-status-text">
                <span className="text-bold">{selectedTile1Name}</span>
                {' and '}
                <span className="text-bold">{selectedTile2Name}</span>
                {' are selected'}
            </div>
        );

        let tileSelectedStatus;
        switch (this.props.selectedTiles.length) {
            case 1:
                tileSelectedStatus = oneTileSelectStatus;
                break;
            case 2:
                tileSelectedStatus = twoTilesSelectStatus;
                break;
            default:
                tileSelectedStatus = helpText;
        }

        let canTalkStatusImage;
        switch (this.props.canTalkStatus) {
            case 'yes':
                canTalkStatusImage = <img className="talk-image" src={require('../assets/images/yesTalk.png')}/>;
                break;
            case 'no':
                canTalkStatusImage = <img className="talk-image" src={require('../assets/images/noTalk.png')}/>;
                break;
            default:
                canTalkStatusImage = null;
        }

        let canTalkStatus = null;
        if (this.props.selectedTiles.length === 2 && this.props.canTalkStatus !== 'hidden') {
            canTalkStatus = (<div className={'talk-container'}>
                <div className={'talk-status-diagram'}>
                    <div className="text-bold flex-2 talk-status-diagram-selected-tile-name">{selectedTile1Name}</div>
                    {canTalkStatusImage}
                    <div className="text-bold flex-2 talk-status-diagram-selected-tile-name">{selectedTile2Name}</div>
                </div>
            </div>);
        }

        return (
            <div className="main-page-container">
                <div className="main-page-header">
                    <div className="main-page-header-left">
                        <h4>Project 42</h4>
                    </div>
                </div>
                <div className="main-page-content-container">

                    <div className="search-function-container">
                        <img className="time-image cursor-pointer" src={require('../assets/images/timeImage.png')}/>
                        <div className="search-bar-container">
                            <CustomTypeahead
                                model={this.props.model}
                                ref={function(typeahead) {
                                    me.typeahead = typeahead;
                                }}/>
                            <Button
                                type={Button.TYPE.PRIMARY}
                                size={Button.SIZE.SMALL}
                                onClick={this.onClickRunButton}>
                                Run
                            </Button>
                        </div>
                    </div>
                    {this.props.tiles.length > 0 ?
                        <div className="query-result-container">
                            <div className="list-container">
                                <ListView
                                    runwayItems={7}
                                    runwayItemsOpposite={5}
                                    aveCellHeight={90}>
                                    {tiles}
                                </ListView>
                            </div>
                            <div className="communication-container">
                                {tileSelectedStatus}
                                <Button
                                    disabled={this.props.selectedTiles.length !== 2}
                                    type={Button.TYPE.PRIMARY}
                                    size={Button.SIZE.SMALL}
                                    onClick={this.canWeTalk}>
                                    Can we talk?
                                </Button>
                                {canTalkStatus}
                                {
                                    this.props.canTalkStatus === 'yes' ?
                                        <Button
                                            type={Button.TYPE.PRIMARY}
                                            size={Button.SIZE.SMALL}
                                            onClick={this.props.openTalkPage}>
                                            Who can talk?
                                        </Button>
                                        :
                                        null
                                }
                            </div>
                        </div>
                        :
                        <div className="query-result-container">
                            <div className="no-result-container">
                                No Result Found
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

Main.propTypes = {
    model: PropTypes.string,
    getTileDataWhat: PropTypes.func,
    getTileDataCan: PropTypes.func,
    onTileNumberClicked: PropTypes.func,
    onShowEps: PropTypes.func,
    onTileClicked: PropTypes.func,
    canWeTalk: PropTypes.func,
    openTalkPage: PropTypes.func,
    tiles: PropTypes.array,
    selectedTiles: PropTypes.array,
    canTalkStatus: PropTypes.string,
    showSidebar: PropTypes.bool
};

Main.defaultProps = {
    model: 'demo',
    tiles: [],
    selectedTiles: [],
    canTalkStatus: 'hidden'
};

export default Main;
