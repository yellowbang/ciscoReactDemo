import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {appActions} from './state/actions/app';

import Main from './pages/Main.jsx';
import Talk from './pages/Talk.jsx';

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

    shouldComponentUpdate (nextProps) {
        return true;
    }

    render () {

        return (
            <div className="app-container">
                {this.props.showTalkPage ?
                    <Talk
                        selectedTiles={this.props.selectedTiles}
                        closeTalkPage={this.props.closeTalkPage}
                    />
                    :
                    <Main
                        onTileClicked={this.props.onTileClicked}
                        canWeTalk={this.props.canWeTalk}
                        openTalkPage={this.props.openTalkPage}
                        tiles={this.props.tiles}
                        selectedTiles={this.props.selectedTiles}
                        canTalkStatus={this.props.canTalkStatus}
                    />
                }
            </div>
        );
    }
}

App.propTypes = {
    toggleSidebar: PropTypes.func,
    showTalkPage: PropTypes.bool,
    onTileClicked: PropTypes.func,
    canWeTalk: PropTypes.func,
    openTalkPage: PropTypes.func,
    closeTalkPage: PropTypes.func,
    tiles: PropTypes.tiles,
    selectedTiles: PropTypes.array,
    canTalkStatus: PropTypes.string,
    showSidebar: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => ({
    showTalkPage: state.app.showTalkPage,
    tiles: state.app.tiles,
    selectedTiles: state.app.selectedTiles,
    canTalkStatus: state.app.canTalkStatus,
    showSidebar: state.app.showSidebar
});

export default connect(mapStateToProps, appActions)(App);

