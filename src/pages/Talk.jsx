import React from 'react';
import PropTypes from 'prop-types';

import {IconButton, Gauge, Button} from 'cisco-ui-components';
import CustomGauge from '../components/CustomGauge';
import PointToPoint from '../components/PointToPoint';
import Chord from '../components/Chord';
import TableResult from '../components/TableResult';
// import constants from '../constants';

import '../App.scss';
import './Talk.scss';
import util from '../common/util';

const CHORD_SIZE = 400;
const CHORD_CONATINER_STYLE = {
    minHeight: CHORD_SIZE + 50
};
const CHORD_DIAGRAM_STYLE = {
    width: CHORD_SIZE + 50,
    minHeight: CHORD_SIZE + 50
};

class Talk extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            tableData: [],
            points: [],
            lineData: {},
            selectedChords: [],
            selectedLine: -2
        };
        this.onClickHowDoTheyTalk = this.onClickHowDoTheyTalk.bind(this);
        this.onCloseHowTheyTalk = this.onCloseHowTheyTalk.bind(this);
        this.onTableRowClicked = this.onTableRowClicked.bind(this);
        this.chordOnSelected = this.chordOnSelected.bind(this);
        this.lineOnClicked = this.lineOnClicked.bind(this);
    }

    onClickHowDoTheyTalk () {
        this.props.howTheyTalk(this.state.selectedChords);
    }

    onCloseHowTheyTalk () {
        this.setState({
            tableData: [],
            lineData: {},
            selectedLine: -2
        });
        this.props.closeHowTheyTalkPage();
    }

    lineOnClicked (index) {
        this.setState({
            selectedLine: index,
            tableData: this.state.lineData[index]
        });
    }

    generateGaugeCenterContent (majorValue, majorValueUnit, minorValue, minorValueUnit) {
        return (
            <div className="gauge-value-container cursor-pointer">
                <div className="gauge-value-major">{majorValue}</div>
                <div className="gauge-value-major-unit">{majorValueUnit}</div>
                {/*<div className="gauge-value-minor">{minorValue}</div>*/}
                {/*<div className="gauge-value-minor-unit">{minorValueUnit}</div>*/}
            </div>
        );
    }

    onTableRowClicked () {

    }

    chordOnSelected (chord1, chord2) {
        let selectedChords = [];
        if (chord1 && chord1.dn && chord2 && chord2.dn) {
            selectedChords = [chord1.dn, chord2.dn];
        }
        this.setState({selectedChords});
    }

    componentWillReceiveProps (nextProps) {
        let points = [];
        if (nextProps.howTheyTalkData && nextProps.howTheyTalkData.path) {
            nextProps.howTheyTalkData.path.forEach(function(dn) {
                points.push({
                    name: util.getNameByDn(dn),
                    tenant: util.getNameByDn(dn, 2)
                });
            });
        }

        let lineData = {};
        if (nextProps.howTheyTalkData && nextProps.howTheyTalkData.flows) {
            let flowsKeys = Object.keys(nextProps.howTheyTalkData.flows);
            flowsKeys.forEach(function(key, index) {
                lineData[index] = {key, data: nextProps.howTheyTalkData.flows[key].data};
            });
        }

        this.setState({points, lineData});
    }

    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.selectedTiles !== this.props.selectedTiles ||
            nextProps.howTheyTalkData !== this.props.howTheyTalkData ||
            nextProps.gaugesData !== this.props.gaugesData ||
            nextProps.chordData !== this.props.chordData ||
            nextState.selectedChords !== this.state.selectedChords ||
            nextState.selectedLine !== this.state.selectedLine ||
            nextState.tableData !== this.state.tableData;
    }

    render () {
        let gauge1 = this.props.gaugesData.gauge1Data;
        let gauge2 = this.props.gaugesData.gauge2Data;
        let gauge1Name, gauge2Name;
        if (gauge1) {
            gauge1Name = gauge1.name;
        }
        if (gauge2) {
            gauge2Name = gauge2.name;
        }

        let totalEPGs1 = gauge1.allEpgs.length;
        let totalEPGs2 = gauge2.allEpgs.length;

        let reachableEnpoints1 = gauge1.reachableEpgs.length;
        let reachableEnpoints2 = gauge2.reachableEpgs.length;
        let nonReachableEPGs1 = gauge1.nonReachableEpgs.length;
        let nonReachableEPGs2 = gauge2.nonReachableEpgs.length;

        let gaugeValue1 = this.generateGaugeCenterContent(totalEPGs1, 'EPGS', reachableEnpoints1, 'EPGs');
        let gaugeValue2 = this.generateGaugeCenterContent(totalEPGs2, 'EPGS', reachableEnpoints2, 'EPGs');

        let chordData = this.props.chordData;

        return (
            <div className="talk-page-container">
                <div className="popup-page-header">
                    <div className="popup-page-header-left">
                        <h4>{gauge1Name + ' and ' + gauge2Name} </h4>
                    </div>
                    <IconButton
                        size={IconButton.SIZE.LARGE}
                        icon={IconButton.ICON.CLOSE}
                        type={'close-button'}
                        onClick={this.props.closeTalkPage}/>
                </div>
                <div className="talk-page-content-container">
                    <div className="gauges-container">
                        <div className="gauge-container">
                            <div className="legends-container">
                                <div className="legend-container cursor-pointer" onClick={this.props.onShowEps.bind(this, gauge1.reachableEpgs)}>
                                    <span className="circle-dot color-green"/>
                                    <span className="epgs-value">{reachableEnpoints1}</span>
                                    <span className="epgs-status">{'Reachable EPGs'}</span>
                                </div>
                                <div className="legend-container cursor-pointer" onClick={this.props.onShowEps.bind(this, gauge1.nonReachableEpgs)}>
                                    <span className="circle-dot color-red"/>
                                    <span className="epgs-value">{nonReachableEPGs1}</span>
                                    <span className="epgs-status">{'Non Reachable EPGs'}</span>
                                </div>
                            </div>
                            <CustomGauge
                                size={Gauge.SIZE.MEDIUM}
                                type={Gauge.TYPE.INFO}
                                title={gauge1Name}
                                titleClassName="gauge-title"
                                center={gaugeValue1}
                                onClick={this.props.onShowEps.bind(this, gauge1.allEpgs)}
                                value={reachableEnpoints1}
                                max={totalEPGs1}/>
                        </div>
                        <div className="gauge-container">
                            <CustomGauge
                                size={Gauge.SIZE.MEDIUM}
                                type={Gauge.TYPE.INFO}
                                title={gauge2Name}
                                titleClassName="gauge-title"
                                center={gaugeValue2}
                                onClick={this.props.onShowEps.bind(this, gauge2.allEpgs)}
                                value={reachableEnpoints2}
                                max={totalEPGs2}/>
                            <div className="legends-container">
                                <div className="legend-container cursor-pointer" onClick={this.props.onShowEps.bind(this, gauge2.reachableEpgs)}>
                                    <span className="circle-dot color-green"/>
                                    <span className="epgs-value">{reachableEnpoints2}</span>
                                    <span className="epgs-status">{'Reachable EPGs'}</span>
                                </div>
                                <div className="legend-container cursor-pointer" onClick={this.props.onShowEps.bind(this, gauge2.nonReachableEpgs)}>
                                    <span className="circle-dot color-red"/>
                                    <span className="epgs-value">{nonReachableEPGs2}</span>
                                    <span className="epgs-status">{'Non Reachable EPGs'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chord-container" style={CHORD_CONATINER_STYLE}>
                        <div className="chord-labels-container">
                            <div className="label-container">
                                <span className="circle-dot color-light-blue"/>
                                <span className="label">{gauge1Name}</span>
                            </div>
                            <div className="label-container">
                                <span className="circle-dot color-dark-blue"/>
                                <span className="label">{gauge2Name}</span>
                            </div>
                        </div>
                        <div className="chord-diagram" style={CHORD_DIAGRAM_STYLE}>
                            <Chord data={chordData} width={CHORD_SIZE} height={CHORD_SIZE} chordOnSelected={this.chordOnSelected}/>
                        </div>
                        <div className="chord-labels-container opacity-zero">
                            <div className="label-container">
                                <span className="circle-dot color-light-blue"/>
                                <span className="label">{gauge1Name}</span>
                            </div>
                            <div className="label-container">
                                <span className="circle-dot color-dark-blue"/>
                                <span className="label">{gauge2Name}</span>
                            </div>
                        </div>
                    </div>
                    <div className="how-they-talk-button flex-row">
                        <Button
                            disabled={this.state.selectedChords.length !== 2}
                            type={Button.TYPE.PRIMARY} size={Button.SIZE.SMALL}
                            onClick={this.onClickHowDoTheyTalk}>
                            How do they talk?
                        </Button>
                    </div>
                </div>
                {this.props.howTheyTalkData ?
                    <div className="how-they-talk-page">
                        <div className="how-they-talk-page-container">
                            <div className="how-they-talk-page-header">
                                <div className="how-they-talk-page-header-left">
                                    <h4>How they talk</h4>
                                </div>
                                <IconButton
                                    size={IconButton.SIZE.LARGE}
                                    icon={IconButton.ICON.CLOSE}
                                    type={'close-button'}
                                    onClick={this.onCloseHowTheyTalk}/>
                            </div>
                            <div className="how-they-talk-page-content">
                                <PointToPoint
                                    onLineClicked={this.lineOnClicked}
                                    points={this.state.points}
                                />
                                <div className="table-container">
                                    <h5 className="table-title">Filters and rules between </h5>
                                    <TableResult
                                        initialPageSize={5}
                                        onRowClick={this.onTableRowClicked}
                                        allData={this.state.tableData.data}/>
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

Talk.propTypes = {
    closeTalkPage: PropTypes.func,
    closeHowTheyTalkPage: PropTypes.func,
    chordOnSelected: PropTypes.func,
    onShowEps: PropTypes.func,
    howTheyTalk: PropTypes.func,
    howTheyTalkData: PropTypes.object,
    gaugesData: PropTypes.object,
    chordData: PropTypes.array,
    selectedTiles: PropTypes.array
};

Talk.defaultProps = {
    howTheyTalkData: undefined,
    gaugesData: {},
    chordData: [],
    selectedTiles: []
};

export default Talk;
