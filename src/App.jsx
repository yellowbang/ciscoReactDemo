import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {appActions} from './state/actions/app';

import Main from './pages/Main.jsx';
import Talk from './pages/Talk.jsx';
import TablePopup from './components/TablePopup';

import './App.scss';
import {IconButton} from 'cisco-ui-components';

class App extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {};
        this.canWeTalk = this.canWeTalk.bind(this);
    }

    componentDidMount () {
        this.props.getData();
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
                        closeHowTheyTalkPage={this.props.closeHowTheyTalkPage}
                        howTheyTalk={this.props.howTheyTalk}
                        howTheyTalkData={this.props.howTheyTalkData}
                    />
                    :
                    <Main
                        onTileClicked={this.props.onTileClicked}
                        onTileNumberClicked={this.props.onTileNumberClicked}
                        canWeTalk={this.props.canWeTalk}
                        openTalkPage={this.props.openTalkPage}
                        tiles={this.props.tiles}
                        selectedTiles={this.props.selectedTiles}
                        canTalkStatus={this.props.canTalkStatus}
                    />
                }
                {this.props.popupTableData.length ?
                    <div className="popup-table-page">
                        <div className="popup-table">
                            <div className="popup-table-header-container">
                                <div className="talk-page-header-left"/>
                                <IconButton
                                    size={IconButton.SIZE.LARGE}
                                    icon={IconButton.ICON.CLOSE}
                                    type={'close-button'}
                                    onClick={this.props.onTileNumberClicked.bind(this, [])}/>
                            </div>
                            <div className="popup-table-page-content">
                                <div className="popup-table-container">
                                    <TablePopup
                                        initialPageSize={5}
                                        allData={this.props.popupTableData}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        );
    }
}

App.propTypes = {
    toggleSidebar: PropTypes.func,
    showTalkPage: PropTypes.bool,
    onTileNumberClicked: PropTypes.func,
    onTileClicked: PropTypes.func,
    canWeTalk: PropTypes.func,
    openTalkPage: PropTypes.func,
    closeTalkPage: PropTypes.func,
    closeHowTheyTalkPage: PropTypes.func,
    howTheyTalk: PropTypes.func,
    tiles: PropTypes.array,
    popupTableData: PropTypes.array,
    selectedTiles: PropTypes.array,
    canTalkStatus: PropTypes.string,
    howTheyTalkData: PropTypes.object,
    showSidebar: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => ({
    showTalkPage: state.app.showTalkPage,
    tiles: state.app.tiles,
    popupTableData: state.app.popupTableData,
    selectedTiles: state.app.selectedTiles,
    canTalkStatus: state.app.canTalkStatus,
    howTheyTalkData: state.app.howTheyTalkData,
    showSidebar: state.app.showSidebar
});

export default connect(mapStateToProps, appActions)(App);

