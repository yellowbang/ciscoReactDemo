import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {appActions} from './state/actions/app';

import {Button} from 'cisco-ui-components';
import Tile from './components/Tile.jsx';
import {ListView, ListViewItem} from 'react-scrollable-list-view';
import constants from './constants';
// import yesTalk from '../src/assets/images/yesTalk.png';

import './App.scss';

class App extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {};
        this.canWeTalk = this.canWeTalk.bind(this);
    }

    canWeTalk () {
        this.props.canWeTalk(this.props.selectedTiles);
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('======', nextProps.selectedTiles);
    // }

    shouldComponentUpdate (nextProps) {
        console.log('-------', nextProps);
        return true;
    }

    render () {
        let me = this;
        let tiles = [];
        constants.FAKE_TILE_DATA.forEach(function(data, i) {
            tiles.push(<ListViewItem height={90} key={i}>
                <Tile data={data} onTileClicked={me.props.onTileClicked}/>
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
            <div className="selected-tile">
                <span className="text-grey">{selectedTile1Name}</span>
                {'Select two items to see if they can talk and if so who can talk'}
            </div>
        );

        let oneTileSelectStatus = (
            <div className="selected-tile">
                <span className="text-bold">{selectedTile1Name}</span>
                {' is selected'}
            </div>
        );

        let twoTilesSelectStatus = (
            <div className="selected-tile">
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
                canTalkStatusImage = <img className="talk-image" src={require('./assets/images/yesTalk.png')}/>;
                break;
            case 'no':
                canTalkStatusImage = <img className="talk-image" src={require('./assets/images/noTalk.png')}/>;
                break;
            default:
                canTalkStatusImage = null;
        }

        let canTalkStatus = null;
        if (this.props.selectedTiles.length === 2 && this.props.canTalkStatus !== 'hidden') {
            canTalkStatus = (<div className={'talk-container'}>
                <div className={'talk-status-diagram'}>
                    <span className="text-bold">{selectedTile1Name}</span>
                    {canTalkStatusImage}
                    <span className="text-bold">{selectedTile2Name}</span>
                </div>
            </div>);
        }

        return (
            <div className="app-container">
                <div className="app-header">
                    <div className="app-header-left">
                        <h4>Project 42</h4>
                    </div>
                </div>
                <div className="app-content-container">

                    <div className="search-function-container">
                    </div>
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
                                        onClick={this.props.whoCanTalk}>
                                        Who can talk?
                                    </Button>
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    toggleSidebar: PropTypes.func,
    onTileClicked: PropTypes.func,
    canWeTalk: PropTypes.func,
    whoCanTalk: PropTypes.func,
    selectedTiles: PropTypes.array,
    canTalkStatus: PropTypes.string,
    showSidebar: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => ({
    tiles: state.app.tiles,
    selectedTiles: state.app.selectedTiles,
    canTalkStatus: state.app.canTalkStatus,
    showSidebar: state.app.showSidebar
});

export default connect(mapStateToProps, appActions)(App);

