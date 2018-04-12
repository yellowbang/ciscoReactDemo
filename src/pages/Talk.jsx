import React from 'react';
import PropTypes from 'prop-types';

import {IconButton, Gauge, Button} from 'cisco-ui-components';
import CustomGauge from '../components/CustomGauge';
import PointToPoint from '../components/PointToPoint';
import TableResult from '../components/TableResult';
// import constants from '../constants';

import './Talk.scss';
import util from '../common/util';

class Talk extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            tableData: [],
            points: [],
            lineData: {},
            selectedLine: -2
        };
        this.onClickHowDoTheyTalk = this.onClickHowDoTheyTalk.bind(this);
        this.onCloseHowTheyTalk = this.onCloseHowTheyTalk.bind(this);
        this.onTableRowClicked = this.onTableRowClicked.bind(this);
        this.lineOnClicked = this.lineOnClicked.bind(this);
    }

    onClickHowDoTheyTalk () {
        this.props.howTheyTalk();
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
            <div className="gauge-value-container">
                <div className="gauge-value-major">{majorValue}</div>
                <div className="gauge-value-major-unit">{majorValueUnit}</div>
                <div className="gauge-value-minor">{minorValue}</div>
                <div className="gauge-value-minor-unit">{minorValueUnit}</div>
            </div>
        );
    }

    onTableRowClicked () {

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
            nextState.selectedLine !== this.state.selectedLine ||
            nextState.tableData !== this.state.tableData;
    }

    render () {
        let selectedTile1 = this.props.selectedTiles[0];
        let selectedTile2 = this.props.selectedTiles[1];
        let selectedTile1Name, selectedTile2Name;
        if (selectedTile1) {
            selectedTile1Name = selectedTile1.name;
        }
        if (selectedTile2) {
            selectedTile2Name = selectedTile2.name;
        }

        let nonReachableEndpoints1 = '1';
        let nonReachableEndpoints2 = '1';

        let totalEndpoints1 = selectedTile1.endPoints;
        let totalEndpoints2 = selectedTile2.endPoints;

        let reachableEnpoints1 = '1';
        let reachableEnpoints2 = '1';

        let gaugeValue = this.generateGaugeCenterContent(totalEndpoints1, 'End Points', '1', 'EPGs');

        return (
            <div className="talk-page-container">
                <div className="talk-page-header">
                    <div className="talk-page-header-left">
                        <h4>{selectedTile1Name + ' and ' + selectedTile2Name} </h4>
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
                            <div className="legends-container flex-align-items-end">
                                <div className="legend-container">
                                    <span className="circle-dot color-green"/>
                                    <span className="endpoints-value">{reachableEnpoints1}</span>
                                    <span className="endpoints-status">{'Reachable Endpoints'}</span>
                                </div>
                                <div className="legend-container">
                                    <span className="circle-dot color-red"/>
                                    <span className="endpoints-value">{nonReachableEndpoints1}</span>
                                    <span className="endpoints-status">{'Non Reachable Endpoints'}</span>
                                </div>
                            </div>
                            <CustomGauge
                                size={Gauge.SIZE.MEDIUM}
                                type={Gauge.TYPE.INFO}
                                title={selectedTile1Name}
                                center={gaugeValue}
                                value={reachableEnpoints1}
                                max={totalEndpoints1}/>
                        </div>
                        <div className="gauge-container">
                            <CustomGauge
                                size={Gauge.SIZE.MEDIUM}
                                type={Gauge.TYPE.INFO}
                                title={selectedTile2Name}
                                center={gaugeValue}
                                value={reachableEnpoints2}
                                max={totalEndpoints2}/>
                            <div className="legends-container">
                                <div className="legend-container">
                                    <span className="circle-dot color-green"/>
                                    <span className="endpoints-value">{reachableEnpoints2}</span>
                                    <span className="endpoints-status">{'Reachable Endpoints'}</span>
                                </div>
                                <div className="legend-container">
                                    <span className="circle-dot color-red"/>
                                    <span className="endpoints-value">{nonReachableEndpoints2}</span>
                                    <span className="endpoints-status">{'Non Reachable Endpoints'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="how-they-talk-container">
                        <PointToPoint points={this.props.selectedTiles}/>
                        <div className="how-they-talk-button flex-row">
                            <Button
                                type={Button.TYPE.PRIMARY} size={Button.SIZE.SMALL}
                                onClick={this.onClickHowDoTheyTalk}>
                                How do they talk?
                            </Button>
                        </div>
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
    howTheyTalk: PropTypes.func,
    howTheyTalkData: PropTypes.object,
    selectedTiles: PropTypes.array
};

Talk.defaultProps = {
    howTheyTalkData: undefined,
    selectedTiles: []
};

export default Talk;
