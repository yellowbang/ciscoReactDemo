/* eslint-disable space-before-function-paren,no-trailing-spaces */
import React from 'react';
import PropTypes from 'prop-types';
import '../scss/components.scss';
import {Gauge} from 'cisco-ui-components';

const SPACE = ' ',
    _CLASSES = {
        CONTAINER: 'gauge-container',
        MAIN: 'gauge',
        MESSAGE: 'alert__message',
        GUAGE_TITLE: 'gauge__title',
        GUAGE_LABEL: 'gauge__label',
        GUAGE_CONTAINER: 'gauge-container',
        GUAGE_CIRCLE: 'gauge__circle',
        GAUGE__INSET: 'gauge__inset',
        GAUGE__PERCENTAGE: 'gauge__percentage',
        MASK_FULL: 'mask full',
        MASK_HALF: 'mask half',
        FILL: 'fill',
        FILL_FIX: 'fill fix'
    };

class CustomGauge extends Gauge {
    shouldComponentUpdate (nextProps, nextState) {
        return true;
    }

    render() {
        let label, title,
            classes = [_CLASSES.MAIN, this.props.size, this.props.type],
            percent = parseInt((this.props.value / this.props.max) * 100, 10);

        if (this.props.label) {
            label = (<div className={_CLASSES.GUAGE_LABEL}>{this.props.label}</div>);
        }

        if (this.props.title) {
            title = (<div className={_CLASSES.GUAGE_TITLE}>{this.props.title}</div>);
        }

        return (<div className={_CLASSES.GUAGE_CONTAINER}>
            {title}
            <div className={classes.join(SPACE)} data-percentage={percent}>
                <div className={_CLASSES.GUAGE_CIRCLE}>
                    <div className={_CLASSES.MASK_FULL}>
                        <div className={_CLASSES.FILL}/>
                    </div>
                    <div className={_CLASSES.MASK_HALF}>
                        <div className={_CLASSES.FILL}/>
                        <div className={_CLASSES.FILL_FIX}/>
                    </div>
                </div>
                <div className={_CLASSES.GAUGE__INSET}>
                    <div className={_CLASSES.GAUGE__PERCENTAGE}>{this.props.center}</div>
                </div>
            </div>
            {label}
        </div>);
    }
}

CustomGauge.propTypes = {
    isChecked: PropTypes.bool,
    data: PropTypes.object,
    onTileClicked: PropTypes.func
};

CustomGauge.defaultProps = {
    isChecked: false,
    data: {}
};

export default CustomGauge;
