import React from 'react';
import PropTypes from 'prop-types';

import {Button, Icon, IconButton} from 'cisco-ui-components';

import constants from '../constants';
import util from '../common/util';

import '../App.scss';
import './RiskTemplates.scss';

class RiskTemplates extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {};
        this.closeRiskTemplatesPage = this.closeRiskTemplatesPage.bind(this);
    }

    closeRiskTemplatesPage () {
        this.props.onShowRiskTemplates(false);
    }

    shouldComponentUpdate (nextProps) {
        return true;
    }

    render () {
        let me = this;

        return (
            <div className="risk-templates-page-container">
                <div className="popup-page-header">
                    <div className="popup-page-header-left">
                        <h4>{'Risk Templates'} </h4>
                    </div>
                    <IconButton
                        size={IconButton.SIZE.LARGE}
                        icon={IconButton.ICON.CLOSE}
                        type={'close-button'}
                        onClick={this.closeRiskTemplatesPage}/>
                </div>
                <div className="risk-templates-page-container-container">
                </div>
                <div className="risk-templates-page-footer-container">
                </div>
            </div>
        );
    }
}

RiskTemplates.propTypes = {
    onShowRiskTemplates: PropTypes.func
};

RiskTemplates.defaultProps = {};

export default RiskTemplates;
