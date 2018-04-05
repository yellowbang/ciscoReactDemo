/* eslint-disable space-before-function-paren,no-trailing-spaces */
import React from 'react';
import PropTypes from 'prop-types';
import epgSvg from '../../src/assets/images/epg.svg';
import '../scss/components.scss';
import {Icon} from 'cisco-ui-components';

class Tile extends React.Component {
    constructor () {
        super();
        this.state = {
            isChecked: false
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick () {
        this.setState({isChecked: !this.state.isChecked}, () => {
            if (this.props.onChange instanceof Function) {
                this.props.onChange(this.props.data);
            }
        });
    }

    componentWillReceiveProps (nextProps) {
        let newState = {};
        if (nextProps.isChecked !== this.state.isChecked) {
            newState.isChecked = nextProps.isChecked;
        }

        if (newState !== {}) {
            this.setState(newState);
        }
    }

    shouldComponentUpdate (nextProps, nextState) {
        return nextState.isChecked !== this.state.isChecked;
    }

    render () {
        let tileClass = 'tile-container';
        if (this.state.isChecked) {
            tileClass = tileClass + ' blue-background';
        }
        let name = this.props.data.name;
        let endPoints = this.props.data.endPoints;

        return (
            <div className={tileClass} onClick={this.onClick}>
                <div className="tile-content-container">
                    <div className="tile-image-container flex-half">
                        <img className="tile-image" src={epgSvg}/>
                    </div>
                    <div className="tile-info-column-container align-start">
                        <div>{name}</div>
                        <div className="tile-image">{name}</div>
                        <div className="tile-image">{name}</div>
                    </div>
                    <div className="tile-info-column-container">
                        <div>{'1'}</div>
                        <div>{'---'}</div>
                    </div>
                    <div className="tile-info-column-container">
                        <div>{'##'}</div>
                        <div>{'---'}</div>
                    </div>
                    <div className="tile-info-column-container">
                        <div>{'##'}</div>
                        <div>{'---'}</div>
                    </div>
                    <div className="tile-info-column-container">
                        <div className="tile-end-point-number">{endPoints}</div>
                        <div className="tile-end-points-text gery-text ">{'End Points'}</div>
                    </div>
                    <div className="tile-info-column-container flex-half">
                        <div className="tile-toggle-icon-container">
                            {this.state.isChecked ?
                                <Icon type={Icon.TYPE.CHECK}/>
                                :
                                null
                            }
                        </div>
                    </div>
                </div>
                {this.state.isChecked ?
                    <div className="tile-overlay"/>
                    :
                    null
                }
            </div>
        );
    }
}

Tile.propTypes = {
    isChecked: PropTypes.bool,
    data: PropTypes.object,
    onChange: PropTypes.func
};

Tile.defaultProps = {
    isChecked: false,
    data: {}
};

export default Tile;
