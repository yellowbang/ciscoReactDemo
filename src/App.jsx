import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {appActions} from './state/actions/app';

import Main from './pages/Main.jsx';

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
                <Main
                    onTileClicked={this.props.onTileClicked}
                    canWeTalk={this.props.canWeTalk}
                    whoCanTalk={this.props.whoCanTalk}
                    tiles={this.props.tiles}
                    selectedTiles={this.props.selectedTiles}
                    canTalkStatus={this.props.canTalkStatus}
                />
            </div>
        );
    }
}

App.propTypes = {
    toggleSidebar: PropTypes.func,
    onTileClicked: PropTypes.func,
    canWeTalk: PropTypes.func,
    whoCanTalk: PropTypes.func,
    tiles: PropTypes.tiles,
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

