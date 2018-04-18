/* eslint-disable space-before-function-paren,no-trailing-spaces */
import React from 'react';
import PropTypes from 'prop-types';
import epgSvg from '../../src/assets/images/epg.svg';
import '../scss/components.scss';
import {Icon} from 'cisco-ui-components';
import util from '../common/util';

class Tile extends React.Component {
    constructor (...args) {
        super(...args);
        this.state = {
            isChecked: this.props.selectedTiles && this.props.selectedTiles.indexOf(this.props.data) !== -1
        };

        this.onClickCheckBox = this.onClickCheckBox.bind(this);
    }

    onClickCheckBox () {
        this.setState({isChecked: !this.state.isChecked}, () => {
            if (this.props.onTileClicked instanceof Function) {
                this.props.onTileClicked(this.props.data);
            }
        });
    }

    onClickColumn (data) {
        this.props.onTileNumberClicked(data);
    }

    onClickEndPoint (data) {
        this.props.onTileNumberClicked(data);
    }

    componentWillReceiveProps (nextProps) {

    }

    shouldComponentUpdate (nextProps, nextState) {
        return nextState.isChecked !== this.state.isChecked;
    }

    render () {
        const me = this;
        let tileClass = 'tile-container';
        let tileContentClass = 'tile-content-container';
        if (this.state.isChecked) {
            tileClass = tileClass + ' blue-background';
            tileContentClass = tileContentClass + ' selected';
        }

        let name = this.props.data.name;
        let endPoints = this.props.data.endPoints;

        let columns = [];
        let keys = Object.keys(this.props.data.allData);
        keys.forEach(function(key) {
            if (key.indexOf('N_') === 0 && key !== 'N_EP' && key !== me.props.data.allData.tile_type) {
                let count = me.props.data.allData[key].count;
                let clickFn = util.emptyFn;
                let numberClassName = 'text-bold';
                if (count) {
                    clickFn = me.onClickColumn.bind(me, me.props.data.allData[key].data);
                    numberClassName = numberClassName + ' cursor-pointer';
                }
                columns.push(
                    <div key={key} className="tile-info-column-container">
                        <div className={numberClassName} onClick={clickFn}>
                            {me.props.data.allData[key].count}
                        </div>
                        <div>{key.split('N_')[1]}</div>
                    </div>
                );
            }
        });

        return (
            <div className={tileClass}>
                <div className={tileContentClass}>
                    <div className="tile-image-container flex-half">
                        <img className="tile-image" src={epgSvg}/>
                    </div>
                    <div className="tile-info-column-container">
                        <div>{name}</div>
                    </div>
                    {columns}
                    <div className="tile-info-column-container">
                        <div
                            className="tile-end-point-number  cursor-pointer"
                            onClick={me.onClickEndPoint.bind(me, me.props.data.allData.N_EP.data)}>
                            {endPoints}
                        </div>
                        <div className="tile-end-points-text gery-text ">{'End Points'}</div>
                    </div>
                    <div className="tile-info-column-container flex-half cursor-pointer" onClick={this.onClickCheckBox}>
                        <div className="tile-toggle-icon-container">
                            {this.state.isChecked ?
                                <Icon type={Icon.TYPE.CHECK}/>
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

Tile.propTypes = {
    isChecked: PropTypes.bool,
    data: PropTypes.object,
    selectedTiles: PropTypes.array,
    onTileNumberClicked: PropTypes.func,
    onTileClicked: PropTypes.func
};

Tile.defaultProps = {
    isChecked: false,
    selectedTiles: [],
    data: {}
};

export default Tile;
