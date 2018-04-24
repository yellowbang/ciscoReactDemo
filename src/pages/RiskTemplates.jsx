import React from 'react';
import PropTypes from 'prop-types';

import {Button, Dropdown, IconButton} from 'cisco-ui-components';
import {ListView, ListViewItem} from 'react-scrollable-list-view';
import TableRiskTemplates from '../components/TableRiskTemplates';
import GroupInfo from '../components/GroupInfo';
import Wizard from '../components/Wizard';

import constants from '../constants';
import util from '../common/util';

import '../App.scss';
import './RiskTemplates.scss';
import TextField from '../components/TextField';

class Rule extends React.Component {
    render () {
        const canTalkTo = [{name: 'Can talk to', value: 'canTalkTo'}];

        return (
            <div className="rule-container">
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
            rules: 1
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
            rules: 1
        });
    }

    closeRiskTemplatesPage () {
        this.props.onShowRiskTemplates(false);
    }

    addRule () {
        let rules = this.state.rules + 1;
        this.setState({rules});
    }

    shouldComponentUpdate (nextProps) {
        return true;
    }

    render () {
        let me = this;
        let rules = [];
        let ruleIndex = 0;
        for (ruleIndex; ruleIndex < this.state.rules; ruleIndex++) {
            rules.push(<ListViewItem height={90} key={'rule' + ruleIndex}>
                <Rule onClickIcon={me.addRule}/>
            </ListViewItem>);
        }

        return (
            <Wizard
                fullScreen={true}
                wizardContainerClassName={'risk-templates-page-container'}
                wizardContentContainerClassName={'risk-templates-page-container-container'}
                title={'Risk Templates'}
                onClickClose={this.closeRiskTemplatesPage}
                buttons={[
                    <Button
                        type={Button.TYPE.PRIMARY} size={Button.SIZE.DEFAULT}
                        onClick={this.closeRiskTemplatesPage}>
                        OK
                    </Button>
                ]}>
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
                {
                    this.state.createRiskTemplateShown ?
                        <Wizard
                            wizardClassName={'create-risk-template-wizard'}
                            wizardContainerClassName={'create-risk-template-wizard-container'}
                            title={'Create Custom Risk Template'}
                            onClickClose={this.closeCreateRiskTemplatesPage}
                            buttons={[
                                <Button
                                    type={Button.TYPE.PRIMARY} size={Button.SIZE.SMALL}
                                    onClick={this.saveCreateRiskTemplatesPage}>
                                    Save
                                </Button>,
                                <Button
                                    type={Button.TYPE.DEFAULT} size={Button.SIZE.SMALL}
                                    onClick={this.closeCreateRiskTemplatesPage}>
                                    Cancel
                                </Button>
                            ]}>
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
                                groupInfoContainerClassName={'template-rules-container'}
                                groupInfoContentContainerClassName={'template-rules'}
                                title={'Template Rules'}>
                                <ListView
                                    runwayItems={7}
                                    runwayItemsOpposite={5}
                                    aveCellHeight={90}>
                                    {rules}
                                </ListView>
                            </GroupInfo>
                        </Wizard>
                        :
                        null
                }
            </Wizard>
        );
    }
}

RiskTemplates.propTypes = {
    onShowRiskTemplates: PropTypes.func
};

RiskTemplates.defaultProps = {};

export default RiskTemplates;
