import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    yAxisDefaultFormatter,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Loader
} from 'cisco-ui-components';
import moment from 'moment';
import Charts from '../../common/charts';
import './StatsChart.scss';
import endsWith from 'lodash/endsWith';
import noop from 'lodash/noop';
import LABELS from '../../strings';
import _ from 'lodash';

/**
 * StatsChart renders a chart given data conforming to top stats schema.
 *
 * Sample response:
 * {
 *   "entries": [
 *      {
 *           "nodeName": "a switch",
 *           "description": "something or nothing",
 *           "stats": [
 *               {
 *                   "timestamp": "2017-09-13:00:00:00",
 *                   "stat1": 50,
 *                   "stat2": 17,
 *                   ...
 *               },
 *               ...
 *              ]
 *       }
 * }
 *
 * @see https://wiki.cisco.com/display/APIC/API+Requirements+-+Dashboards#APIRequirements-Dashboards-TopNodesStatistics
 */
class StatsChart extends Component {
    constructor() {
        super();

        this.state = {
            stats: {
                series: [],
                data: []
            },
            dataLoadErr: undefined,
            dataLoading: false,
            opacity: {},
            strokeWidth: {}
        };

        // bind in constructor in order to have the correct 'this' context when executed
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleLegendClick = this.handleLegendClick.bind(this);
    }

    makeLoadRequest(props) {

        this.setState({
            dataLoading: true
        });

        return props.endpoint(props.endpointParams)
            .then((response) => {
                this.loadStats(response);
                this.initializeSeriesStyles();
            })
            .catch((err) => {
                this.setState({
                    dataLoadErr: err,
                    dataLoading: false,
                    stats: {
                        series: [],
                        data: []
                    }
                });
            });
    }

    componentDidMount() {
        this.makeLoadRequest(this.props);
    }

    componentWillReceiveProps(nextProps) {
        /**
         *  if any endpointParams is different the api
         *  will get called. "return true" will terminate
         *  the loop.
         */
        Object.keys(nextProps.endpointParams).some((key) => {
            if (nextProps.endpointParams[key] !== this.props.endpointParams[key]) {
                this.makeLoadRequest(nextProps);
                return true;
            }
            return false;
        });
    }

    initializeSeriesStyles() {
        this.setState(this.normalSeriesStyles());
    }

    normalSeriesStyles() {
        let o = {opacity: {}, strokeWidth: {}};

        this.state.stats.series.map((s) => {
            o.opacity[s.name] = 0.8;
            o.strokeWidth[s.name] = 2;
        });

        return o;
    }

    hoverSeriesStyles() {
        let o = {opacity: {}, strokeWidth: {}};

        this.state.stats.series.map((s) => {
            o.opacity[s.name] = 0.25;
        });

        return o;
    }

    loadStats(response) {
        let s = {
            stats: Charts.transformStatsResponse(response.entries, this.props.seriesId, this.props.statName),
            dataLoadErr: undefined,
            dataLoading: false
        };
        if (this.props.storeDataFilter.name !== 'noop') {
            s.data = this.props.storeDataFilter(response);
        }
        this.setState(s);
    }

    handleMouseEnter(o) {
        const {dataKey} = o;
        const {opacity, strokeWidth} = this.hoverSeriesStyles();

        this.setState({
            opacity: {...opacity, [dataKey]: 1},
            strokeWidth: {...strokeWidth, [dataKey]: 3}
        });
    }

    handleLineMouseEnter(o, dataKey) {
        this.activeDataKey = dataKey;
        const {opacity, strokeWidth} = this.hoverSeriesStyles();

        this.setState({
            opacity: {...opacity, [dataKey]: 1},
            strokeWidth: {...strokeWidth, [dataKey]: 3}
        });
    }

    handleMouseLeave() {
        this.initializeSeriesStyles();
    }

    handleLegendClick(event, index, proxy) {
        this.props.onLegendClick(event, index, proxy, this.state, this.props.statName);
    }

    handleLineClick = (event, name) => {
        if (this.props.onLineClick.name !== 'noop') {
            this.props.onLineClick(event, name, this.state, this.props.statName);
        }
    };

    xAxisLabelFormatter(value) {
        let date = moment(value);
        if (date === null || !date.isValid()) {
            return value;
        }
        return date.format('MM-DD h:mm:ss A');
    }

    yAxisLabelFormatter = (value) => {
        if (this.props.yAxisLabelFormatter) {
            return this.props.yAxisLabelFormatter(value);
        }
        return value;
    }

    yAxisLabelFormatter2 = (value) => {
        if (this.props.yAxisLabelFormatter2) {
            return this.props.yAxisLabelFormatter2(value);
        }

        return value;
    }

    render() {
        const {stats, opacity, strokeWidth, dataLoading} = this.state;

        let chart,
            yAxes = [],
            chartLines = [],
            noDataView,
            noDataMessage,
            xAxisLabel,
            yAxisPrimaryLabel,
            yAxisSecondaryLabel,
            loader;

        if (dataLoading) {
            loader = <div className="chart-loader"><Loader></Loader></div>;
        }

        if (this.state.dataLoadErr) {
            noDataMessage =
                <span className="no-data-label"><span className="icon-alert icon-tiny"></span>{LABELS.dataLoadErrMsg}</span>;
        } else if (!stats.data || !stats.data.length) {
            noDataMessage = <span className="no-data-label">{LABELS.noData}</span>;
        }

        if (!_.isUndefined(this.props.xAxisLabel)) {
            xAxisLabel = {
                value: this.props.xAxisLabel,
                position: 'bottom'
            };
        }

        if (!_.isUndefined(this.props.yAxisPrimaryLabel)) {
            yAxisPrimaryLabel = {
                value: this.props.yAxisPrimaryLabel,
                angle: -90,
                position: 'left'
            };
        }

        if (!_.isUndefined(this.props.yAxisSecondaryLabel)) {
            yAxisSecondaryLabel = {
                value: this.props.yAxisSecondaryLabel,
                angle: 90,
                position: 'right'
            };
        }

        yAxes.push(
            <YAxis yAxisId="left" key="left" label={yAxisPrimaryLabel} tickFormatter={this.yAxisLabelFormatter}/>);

        if (this.props.secondAxisProp) {
            yAxes.push(<YAxis yAxisId="right"
                              key="right"
                              orientation="right" label={yAxisSecondaryLabel}
                              tickFormatter={this.yAxisLabelFormatter2}/>);
        }

        stats.series.map((s, i) => {
            let name = this.props.seriesLabel && this.props.seriesLabel(s) || s.seriesId;
            if (typeof name === 'undefined' || name === '') {
                name = <i>{LABELS.unknown.toLowerCase()}</i>;
            }
            chartLines.push(
                <Line key={s.name} name={name}
                      yAxisId={endsWith(s.name, this.props.secondAxisProp) ? 'right' : 'left'}
                      type="monotone"
                      dataKey={s.name}
                      stroke={Charts.seriesColor(i)}
                      strokeWidth={strokeWidth[s.name]}
                      strokeOpacity={opacity[s.name]}
                      onClick={(e) => this.handleLineClick(e, name)}
                      onMouseEnter={(e) => this.handleLineMouseEnter(e, s.name)}
                      onMouseLeave={this.handleMouseLeave}
                      dot={
                          <CustomDot
                              r={5}
                              strokeWidth={1}
                              onMouseEnter={(e) => this.handleLineMouseEnter(e, s.name)}
                              onMouseLeave={this.handleMouseLeave}
                              onClick={(e) => this.handleLineClick(e, name)}/>
                      }
                      activeDot={false}/>);
        });

        if (noDataMessage) {
            noDataView = <div className="chart-message-text">{noDataMessage}</div>
        } else {
            chart =
                (<div className="rechart-container">
                    <ResponsiveContainer width="96%" height={this.props.height}>
                        <LineChart data={stats.data} margin={{top: 5, right: 5, left: 24, bottom: 24}}>
                            <XAxis dataKey="timestamp" height={20} label={xAxisLabel} tickFormatter={this.xAxisLabelFormatter} padding={{
                                left: 10,
                                right: 0
                            }}/>
                            {yAxes}
                            <CartesianGrid stroke="rgba(128,128,128,.35)" strokeDasharray="3 3"/>
                            <Tooltip content={<CustomTooltip dataKey={this.activeDataKey}/>}/>
                            {chartLines}
                            <Legend layout="vertical"
                                    align="right"
                                    verticalAlign="top"
                                    iconType="circle"
                                    iconSize={10}
                                    wrapperStyle={{
                                        right: '-10px',
                                        left: 'auto'
                                    }}
                                    onMouseEnter={this.handleMouseEnter}
                                    onMouseLeave={this.handleMouseLeave}
                                    onClick={this.handleLegendClick}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>);
        }

        return (
            <div className="chart-item">
                <div className="chart-title">{this.props.title}</div>
                <div className="chart-content">
                    {loader}
                    {chart}
                    {noDataView}
                </div>
            </div>
        );
    }
}

StatsChart.propTypes = {
    endpoint: PropTypes.func.isRequired,
    endpointParams: PropTypes.object,
    statName: PropTypes.string.isRequired,
    seriesId: PropTypes.string.isRequired,
    seriesLabel: PropTypes.func,
    height: PropTypes.number,
    onLegendClick: PropTypes.func,
    secondAxisProp: PropTypes.string, // property name to be mapped to a second axis
    storeDataFilter: PropTypes.func,
    onLineClick: PropTypes.func,
    xAxisLabel: PropTypes.string,
    yAxisPrimaryLabel: PropTypes.string,
    yAxisSecondaryLabel: PropTypes.string,
    yAxisLabelFormatter: PropTypes.func,
    yAxisLabelFormatter2: PropTypes.func
};

StatsChart.defaultProps = {
    endpointParams: {},
    height: 300,
    storeDataFilter: noop,
    onLineClick: noop,
    xAxisLabel: LABELS.time,
    yAxisPrimaryLabel: '',
    yAxisSecondaryLabel: '',
    yAxisLabelFormatter: yAxisDefaultFormatter,
    yAxisLabelFormatter2: yAxisDefaultFormatter
};

class CustomTooltip extends Component {

    /**
     * Formats label in the tooltip
     * @param label
     * @returns {*}
     */
    labelFormatter(label) {
        let date = moment(label);
        if (date === null || !date.isValid()) {
            return label;
        }
        return date.format('MMM Do YYYY, h:mm:ss a');
    }

    /**
     * Formats value in the tooltip
     * @param value
     * @returns {*}
     */
    formatter(value) {
        if (typeof value === 'number' && value % 1 !== 0) {
            return value.toFixed(2);
        }
        return value;
    }

    render() {
        const {active, dataKey, payload} = this.props;
        let currentPayload;

        if (active) {
            for (let i = 0; i < payload.length; i++) {
                if (payload[i].dataKey === dataKey) {
                    currentPayload = payload[i];
                }
            }

            if (currentPayload) {
                return (
                    <div className="custom-tooltip">
                        <span className="timestamp">{this.labelFormatter(currentPayload.payload.timestamp)}</span>
                        <span className="bullet" style={{backgroundColor: currentPayload.stroke}}></span>
                        <span className="serie-name">{currentPayload.name}</span>
                        <span className="serie-value">{this.formatter(currentPayload.value)}</span>
                    </div>
                );
            }
        }

        return null;
    }
}

CustomTooltip.propTypes = {
    type: PropTypes.string,
    payload: PropTypes.array,
    label: PropTypes.string,
    dataKey: PropTypes.string
}

class CustomDot extends Component {
    componentWillMount() {
        // Save initial values
        this.fill = this.props.fill;
        this.stroke = this.props.stroke;
        this.strokeWidth = this.props.strokeWidth;
        this.state = {
            fill: this.fill,
            stroke: this.stroke
        };
    }

    onMouseEnter = (e) => {
        this.props.onMouseEnter(e, this.props.dataKey);
        this.setState({
            fill: this.stroke,
            stroke: this.stroke
        });
    }

    onMouseLeave = (e) => {
        this.props.onMouseLeave(e);
        this.setState({
            fill: this.fill,
            stroke: this.stroke,
            strokeWidth: this.strokeWidth
        });
    }

    render() {
        if (!isNaN(this.props.value)) {
            return (
                <circle className="custom-dot"
                        cx={this.props.cx}
                        cy={this.props.cy}
                        r={this.props.r}
                        fill={this.state.fill}
                        strokeOpacity={this.props.strokeOpacity}
                        strokeWidth={this.state.strokeWidth}
                        stroke={this.state.stroke}
                        onClick={this.props.onClick}
                        onMouseEnter={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave}></circle>
            );
        }

        return null;
    }
}

CustomDot.propTypes = {
    cx: PropTypes.number,
    cy: PropTypes.number,
    r: PropTypes.number,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeOpacity: PropTypes.number,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func
}

export default StatsChart;
