import React from 'react';
import PropTypes from 'prop-types';

import {Button} from 'cisco-ui-components';
import Tile from '../components/Tile.jsx';
import {ListView, ListViewItem} from 'react-scrollable-list-view';
import constants from '../constants';

import './Main.scss';

class Main extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {};
        this.canWeTalk = this.canWeTalk.bind(this);
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
                    <div className="text-bold flex-2">{selectedTile1Name}</div>
                    {canTalkStatusImage}
                    <div className="text-bold flex-2">{selectedTile2Name}</div>
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
                        <img className="time-image cursor-pointer" src={require('../assets/images/timeImage.png')} onClick={this.props.getTileData}/>
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
                                    type={Button.TYPE.PRIMARY} size={Button.SIZE.SMALL}
                                    onClick={this.canWeTalk}>
                                    Can we talk?
                                </Button>
                                {canTalkStatus}
                                {
                                    this.props.canTalkStatus === 'yes' ?
                                        <Button
                                            type={Button.TYPE.PRIMARY} size={Button.SIZE.SMALL}
                                            onClick={this.props.openTalkPage}>
                                            Who can talk?
                                        </Button>
                                        :
                                        null
                                }
                            </div>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        );
    }
}

Main.propTypes = {
    getTileData: PropTypes.func,
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
    tiles: [],
    selectedTiles: [],
    canTalkStatus: 'hidden'
};

export default Main;
