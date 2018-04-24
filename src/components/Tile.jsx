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
        this.tileIsSelected = this.tileIsSelected.bind(this);
        this.onClickCheckBox = this.onClickCheckBox.bind(this);

        this.state = {
            isChecked: this.tileIsSelected(this.props)
        };
    }

    tileIsSelected (props) {
        return props.selectedTiles && props.selectedTiles.indexOf(props.data) !== -1;
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
        this.props.onShowEps(data);
    }

    componentWillReceiveProps (nextProps) {
        let isChecked;

        if (nextProps.data !== this.props.data) {
            isChecked = false;
        }
        isChecked = this.tileIsSelected(nextProps);
        this.setState({
            isChecked
        });
    }

    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.data !== this.props.data ||
            nextState.isChecked !== this.state.isChecked;
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

        let columns = [];
        let keys = Object.keys(this.props.data.allData);
        keys.forEach(function(key) {
            if (key.indexOf('N_') === 0 && key !== 'N_EPG' && key !== 'N_EP' && key !== 'N_INVENTORY' && key !== me.props.data.allData.tile_type) {
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

        columns.push(
            <div key={'N_EP'} className="tile-info-column-container">
                <div className={'text-bold cursor-pointer'} onClick={me.onClickEndPoint.bind(me, [me.props.data.dn])}>
                    {me.props.data.allData.N_EP.count}
                </div>
                <div>EP</div>
            </div>
        )

        return (
            <div className={tileClass}>
                <div className={tileContentClass}>
                    <div className="tile-image-container flex-half">
                        <img className="tile-image" src={epgSvg}/>
                    </div>
                    <div className="tile-info-column-container">
                        <div className="text-one-row">{name}</div>
                    </div>
                    {columns}
                    <div className="tile-info-column-container">
                        <div
                            className="tile-end-point-number  cursor-pointer"
                            onClick={me.onClickColumn.bind(me, me.props.data.allData.N_EPG.data)}>
                            {this.props.data.allData.N_EPG.count}
                        </div>
                        <div className="tile-end-points-text text-color-gery ">{'EPGs'}</div>
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
    onShowEps: PropTypes.func,
    onTileClicked: PropTypes.func
};

Tile.defaultProps = {
    isChecked: false,
    selectedTiles: [],
    data: {}
};

export default Tile;
