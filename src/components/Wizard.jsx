/* eslint-disable space-before-function-paren,no-trailing-spaces */
import React from 'react';
import PropTypes from 'prop-types';
import '../scss/components.scss';
import {IconButton} from 'cisco-ui-components';

class Wizard extends React.Component {
    constructor (...args) {
        super(...args);
        this.state = {};
    }

    render () {
        const me = this;
        let wizardClassName = 'wizard';
        if (this.props.wizardClassName) {
            wizardClassName = wizardClassName + ' ' + this.props.wizardClassName;
        }

        let wizardContainerClassName = 'wizard-container';
        if (this.props.wizardContainerClassName) {
            wizardContainerClassName = wizardContainerClassName + ' ' + this.props.wizardContainerClassName;
        }

        let wizardHeaderContainerClassName = 'wizard-header-container';
        if (this.props.wizardHeaderContainerClassName) {
            wizardHeaderContainerClassName = wizardHeaderContainerClassName + ' ' + this.props.wizardHeaderContainerClassName;
        }

        let wizardContentContainerClassName = 'wizard-content-container';
        if (this.props.wizardContentContainerClassName) {
            wizardContentContainerClassName = wizardContentContainerClassName + ' ' + this.props.wizardContentContainerClassName;
        }

        let wizardFooterContainerClassName = 'wizard-footer-container';
        if (this.props.wizardFooterContainerClassName) {
            wizardFooterContainerClassName = wizardFooterContainerClassName + ' ' + this.props.wizardFooterContainerClassName;
        }

        let footerButtons = [];
        let hasFooter = this.props.buttons && this.props.buttons.length > 0;
        if (this.props.buttons && this.props.buttons.length > 0) {
            this.props.buttons.forEach(function(button, i) {
                if (i !== 0) {
                    footerButtons.push(<div className="empty-space"/>);
                }
                footerButtons.push(button);
            });
        }
        return (

            <div className={wizardClassName}>
                <div className={wizardContainerClassName}>
                    <div className={wizardHeaderContainerClassName}>
                        <div className="popup-page-header-left">
                            <h5>{this.props.title}</h5>
                        </div>
                        <IconButton
                            size={IconButton.SIZE.LARGE}
                            icon={IconButton.ICON.CLOSE}
                            type={'close-button'}
                            onClick={this.props.onClickClose}/>
                    </div>
                    <div className={wizardContentContainerClassName}>
                        {this.props.children}
                    </div>
                    {
                        hasFooter ?
                            <div className={wizardFooterContainerClassName}>
                                {footerButtons}
                            </div>
                            :
                            null
                    }
                </div>
            </div>
        );
    }
}

Wizard.propTypes = {
    wizardClassName: PropTypes.string,
    wizardContainerClassName: PropTypes.string,
    wizardHeaderContainerClassName: PropTypes.string,
    wizardContentContainerClassName: PropTypes.string,
    wizardFooterContainerClassName: PropTypes.string,
    onClickClose: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.element,
    buttons: PropTypes.array,
    data: PropTypes.object
};

Wizard.defaultProps = {
    wizardClassName: '',
    wizardContainerClassName: '',
    wizardHeaderContainerClassName: '',
    wizardContentContainerClassName: '',
    wizardFooterContainerClassName: '',
    title: '',
    children: '',
    buttons:[],
    data: {}
};

export default Wizard;
