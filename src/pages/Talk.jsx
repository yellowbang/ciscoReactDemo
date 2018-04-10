import React from 'react';
import PropTypes from 'prop-types';

import {IconButton, Gauge} from 'cisco-ui-components';
import CustomGauge from '../components/CustomGauge';
import PointToPoint from '../components/PointToPoint';
// import constants from '../constants';

import './Talk.scss';

class Talk extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {};
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

    shouldComponentUpdate (nextProps) {
        return nextProps.selectedTiles !== this.props.selectedTiles;
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

        let nonReachableEndpoints1 = '56';
        let nonReachableEndpoints2 = '56';

        let totalEndpoints1 = '100';
        let totalEndpoints2 = '100';

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
                                    <span className="endpoints-value">{selectedTile1.reachable}</span>
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
                                value={this.props.selectedTiles[0].reachable}
                                max={totalEndpoints1}/>
                        </div>
                        <div className="gauge-container">
                            <CustomGauge
                                size={Gauge.SIZE.MEDIUM}
                                type={Gauge.TYPE.INFO}
                                title={selectedTile2Name}
                                center={gaugeValue}
                                value={this.props.selectedTiles[1].reachable}
                                max={totalEndpoints2}/>
                            <div className="legends-container">
                                <div className="legend-container">
                                    <span className="circle-dot color-green"/>
                                    <span className="endpoints-value">{selectedTile2.reachable}</span>
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
                    <PointToPoint points={this.props.selectedTiles}/>
                </div>
            </div>
        );
    }
}

Talk.propTypes = {
    closeTalkPage: PropTypes.func,
    selectedTiles: PropTypes.array
};

Talk.defaultProps = {
    selectedTiles: []
};

export default Talk;
