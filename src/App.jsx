import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {appActions} from './state/actions/app';

import {Sidebar, Icon, Button} from 'cisco-ui-components';
import Tile from './components/Tile.jsx';
import {ListView, ListViewItem} from 'react-scrollable-list-view';
import constants from './constants';
// import yesTalk from '../src/assets/images/yesTalk.png';

import './App.scss';

class App extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {
            canTalk: true
        };
    }

    render () {

        let tiles = [];
        constants.TILE_DATA.forEach(function(data, i) {
            tiles.push(<ListViewItem height={90} key={i}>
                <Tile data={data}/>
            </ListViewItem>);
        });

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
                            <div className="selected-tile">
                                <span className="bold-text">epg1</span>
                                {' and '}
                                <span className="bold-text">epg2</span>
                                {' are selected'}
                            </div>
                            <Button
                                type={Button.TYPE.PRIMARY} size={Button.SIZE.SMALL}
                                onClick={this.props.canWeTalk}>
                                Can we talk?
                            </Button>
                            <div className={'talk-container'}>
                                <span className="bold-text">epg1</span>
                                {
                                    this.state.canTalk ?
                                        <img className="talk-image" src={require('./assets/images/yesTalk.png')}/>
                                        :
                                        <img className="talk-image" src={require('./assets/images/noTalk.png')}/>
                                }
                                <span className="bold-text">epg2</span>
                            </div>
                            {
                                this.state.canTalk ?
                                    <Button
                                        className="filter-button" type={Button.TYPE.PRIMARY} size={Button.SIZE.SMALL}
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
    canWeTalk: PropTypes.func,
    whoCanTalk: PropTypes.func,
    canTalk: PropTypes.bool,
    showSidebar: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => ({
    showSidebar: state.app.showSidebar
});

export default connect(mapStateToProps, appActions)(App);

