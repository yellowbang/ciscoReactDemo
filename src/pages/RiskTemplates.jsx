import React from 'react';
import PropTypes from 'prop-types';

import {Button, Dropdown, IconButton} from 'cisco-ui-components';
import TableRiskTemplates from '../components/TableRiskTemplates';
import GroupInfo from '../components/GroupInfo';

import constants from '../constants';
import util from '../common/util';

import '../App.scss';
import './RiskTemplates.scss';
import TextField from '../components/TextField';

class Rule extends React.Component {
    render () {
        const canTalkTo = [{name: 'Can talk to', value: 'canTalkTo'}];

        return (
            <div key={this.props.ruleKey} className="rule-container">
                <TextField
                    textBarClassName="text-field"
                    title={'Zone A'}/>
                <Dropdown title="" name="how" items={canTalkTo}/>
                <TextField
                    textBarClassName="text-field"
                    title={'Zone B'}/>
                <IconButton
                    size={IconButton.SIZE.LARGE}
                    icon={IconButton.ICON.PLUS}
                    type={'close-button'}
                    onClick={this.props.onClickIcon}/>
            </div>
        );
    }
}

Rule.propTypes = {
    ruleKey: PropTypes.string,
    onClickIcon: PropTypes.func
};

class RiskTemplates extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.showCreateRiskTemplatesPage = this.showCreateRiskTemplatesPage.bind(this);
        this.closeCreateRiskTemplatesPage = this.closeCreateRiskTemplatesPage.bind(this);
        this.saveCreateRiskTemplatesPage = this.saveCreateRiskTemplatesPage.bind(this);
        this.closeRiskTemplatesPage = this.closeRiskTemplatesPage.bind(this);
        this.addRule = this.addRule.bind(this);
        this.state = {
            createRiskTemplateShown: false,
            rules: [(<Rule ruleKey={'rule0'} onClickIcon={this.addRule}/>)]
        };
    }

    showCreateRiskTemplatesPage () {
        this.setState({
            createRiskTemplateShown: true
        });
    }

    saveCreateRiskTemplatesPage () {
        this.setState({
            createRiskTemplateShown: false
        });
        let newRiskTemplateName = this.nameField.getValue();
        //TODO:bon api create new risk template
    }

    closeCreateRiskTemplatesPage () {
        this.setState({
            createRiskTemplateShown: false,
            rules: [(<Rule ruleKey={'rule0'} onClickIcon={this.addRule}/>)]
        });
    }

    closeRiskTemplatesPage () {
        this.props.onShowRiskTemplates(false);
    }

    addRule () {
        let rules = this.state.rules.slice(0);
        let key = 'rule' + rules.length;
        rules.push(<Rule ruleKey={key} onClickIcon={this.addRule}/>);
        this.setState({rules});
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
                    <div className="add-risk-template-button">
                        <Button
                            type={Button.TYPE.PRIMARY_GHOST} size={Button.SIZE.SMALL}
                            onClick={this.showCreateRiskTemplatesPage}>
                            Add Custom Risk Template
                        </Button>
                    </div>
                    <div className="risk-templates-table">
                        <TableRiskTemplates/>
                    </div>
                </div>
                <div className="risk-templates-page-footer-container">
                    <Button
                        type={Button.TYPE.PRIMARY} size={Button.SIZE.DEFAULT}
                        onClick={this.closeRiskTemplatesPage}>
                        OK?
                    </Button>
                </div>

                {
                    this.state.createRiskTemplateShown ?
                        <div className="create-risk-template-background">
                            <div className="create-risk-template-container">
                                <div className="header-container">
                                    <div className="popup-page-header-left">
                                        <h5>Create Custom Risk Template</h5>
                                    </div>
                                    <IconButton
                                        size={IconButton.SIZE.LARGE}
                                        icon={IconButton.ICON.CLOSE}
                                        type={'close-button'}
                                        onClick={this.closeCreateRiskTemplatesPage}/>
                                </div>
                                <div className="create-risk-template-content-container">
                                    <GroupInfo
                                        title={'General'}>
                                        <TextField
                                            textBarClassName="text-field"
                                            title={'Name*'}
                                            ref={function(nameField) {
                                                me.nameField = nameField;
                                            }}/>
                                    </GroupInfo>
                                    <GroupInfo
                                        groupInfoContentContainerClassName={'template-rules-group'}
                                        title={'Template Rules'}>
                                        {this.state.rules}
                                    </GroupInfo>
                                </div>
                                <div className="create-risk-template-footer-container">
                                    <Button
                                        type={Button.TYPE.PRIMARY} size={Button.SIZE.SMALL}
                                        onClick={this.saveCreateRiskTemplatesPage}>
                                        Save
                                    </Button>
                                    <div className="empty-space"/>
                                    <Button
                                        type={Button.TYPE.DEFAULT} size={Button.SIZE.SMALL}
                                        onClick={this.closeCreateRiskTemplatesPage}>
                                        Cancel
                                    </Button>
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

RiskTemplates.propTypes = {
    onShowRiskTemplates: PropTypes.func
};

RiskTemplates.defaultProps = {};

export default RiskTemplates;
