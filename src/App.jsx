import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {appActions} from './state/actions/app';

import Main from './pages/Main.jsx';
import Talk from './pages/Talk.jsx';
import RiskTemplates from './pages/RiskTemplates.jsx';
import TablePopup from './components/TablePopup';
import TableEps from './components/TableEps';

import './App.scss';
import {IconButton} from 'cisco-ui-components';

class App extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {};
        this.onShowEps = this.onShowEps.bind(this);
        this.canWeTalk = this.canWeTalk.bind(this);
    }

    componentDidMount () {
        // this.props.getTileDataWhat();
    }

    onShowEps (dns) {
        this.props.onShowEps(dns, this.props.model);
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
                        chordOnSelected={this.props.chordOnSelected}
                        onShowEps={this.onShowEps}
                        howTheyTalk={this.props.howTheyTalk}
                        howTheyTalkData={this.props.howTheyTalkData}
                        gaugesData={this.props.gaugesData}
                        chordData={this.props.chordData}
                    />
                    :
                    <Main
                        model={this.props.model}
                        getTileDataWhat={this.props.getTileDataWhat}
                        getTileDataCan={this.props.getTileDataCan}
                        onTileClicked={this.props.onTileClicked}
                        onTileNumberClicked={this.props.onTileNumberClicked}
                        onShowRiskTemplates={this.props.onShowRiskTemplates}
                        onShowEps={this.onShowEps}
                        canWeTalk={this.props.canWeTalk}
                        openTalkPage={this.props.openTalkPage}
                        tiles={this.props.tiles}
                        selectedTiles={this.props.selectedTiles}
                        canTalkStatus={this.props.canTalkStatus}
                    />
                }
                {
                    this.props.popupTableData.length ?
                        <div className="app-page-popup">
                            <div className="popup-table">
                                <div className="popup-table-header-container">
                                    <div className="popup-page-header-left"/>
                                    <IconButton
                                        size={IconButton.SIZE.LARGE}
                                        icon={IconButton.ICON.CLOSE}
                                        type={'close-button'}
                                        onClick={this.props.onTileNumberClicked.bind(this, [])}/>
                                </div>
                                <div className="app-page-popup-content">
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
                {
                    this.props.epTableData.length ?
                        <div className="app-page-popup">
                            <div className="popup-table">
                                <div className="popup-table-header-container">
                                    <div className="popup-page-header-left">
                                        <h5>End Points</h5>
                                    </div>
                                    <IconButton
                                        size={IconButton.SIZE.LARGE}
                                        icon={IconButton.ICON.CLOSE}
                                        type={'close-button'}
                                        onClick={this.onShowEps.bind(this, [])}/>
                                </div>
                                <div className="app-page-popup-content">
                                    <div className="popup-table-container">
                                        <TableEps
                                            initialPageSize={5}
                                            allData={this.props.epTableData}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        null
                }
                {
                    this.props.showRiskTemplates ?
                        <div className="app-page-popup">
                            <RiskTemplates
                                onShowRiskTemplates={this.props.onShowRiskTemplates}/>
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
    getTileDataWhat: PropTypes.func,
    getTileDataCan: PropTypes.func,
    showTalkPage: PropTypes.bool,
    showRiskTemplates: PropTypes.bool,
    onTileNumberClicked: PropTypes.func,
    onShowEps: PropTypes.func,
    onShowRiskTemplates: PropTypes.func,
    onTileClicked: PropTypes.func,
    canWeTalk: PropTypes.func,
    openTalkPage: PropTypes.func,
    closeTalkPage: PropTypes.func,
    closeHowTheyTalkPage: PropTypes.func,
    chordOnSelected: PropTypes.func,
    howTheyTalk: PropTypes.func,
    model: PropTypes.string,
    tiles: PropTypes.array,
    popupTableData: PropTypes.array,
    epTableData: PropTypes.array,
    selectedTiles: PropTypes.array,
    gaugesData: PropTypes.object,
    chordData: PropTypes.array,
    canTalkStatus: PropTypes.string,
    howTheyTalkData: PropTypes.object,
    showSidebar: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => ({
    showTalkPage: state.app.showTalkPage,
    showRiskTemplates: state.app.showRiskTemplates,
    model: state.app.model,
    tiles: state.app.tiles,
    popupTableData: state.app.popupTableData,
    epTableData: state.app.epTableData,
    selectedTiles: state.app.selectedTiles,
    canTalkStatus: state.app.canTalkStatus,
    howTheyTalkData: state.app.howTheyTalkData,
    gaugesData: state.app.gaugesData,
    chordData: state.app.chordData,
    showSidebar: state.app.showSidebar
});

export default connect(mapStateToProps, appActions)(App);

