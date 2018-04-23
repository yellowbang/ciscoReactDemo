/* eslint-disable space-before-function-paren,no-trailing-spaces */
import React from 'react';
import PropTypes from 'prop-types';
import '../scss/components.scss';
import {Icon, IconButton} from 'cisco-ui-components';

import {ContextMenu, Item, Separator, Submenu, ContextMenuProvider} from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';

class Header extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.oncClickRiskTemplate = this.oncClickRiskTemplate.bind(this);
    }

    oncClickRiskTemplate () {
        this.props.onShowRiskTemplates(true);
    }

    shouldComponentUpdate (nextProps, nextState) {
        return false;
    }

    render () {
        return (
            <div className="header-container">
                <div className="header-left">
                    <IconButton
                        size={IconButton.SIZE.LARGE}
                        icon={IconButton.ICON.LIST_MENU}
                        type={'header-button'}
                        // onClick={this.props.closeTalkPage}
                    />
                    <a className="header-bar__logo">
                        <Icon type={Icon.TYPE.CISCO}/>
                    </a>
                    <h4>Project 42</h4>
                </div>
                <ContextMenuProvider id="cog_id" event="onClick">
                    <IconButton
                        size={IconButton.SIZE.LARGE}
                        icon={IconButton.ICON.COG}
                        type={'header-button'}/>
                </ContextMenuProvider>
                <ContextMenu id="cog_id">
                    <Item onClick={this.oncClickRiskTemplate}>Risk Template</Item>
                </ContextMenu>
            </div>
        );
    }
}

Header.propTypes = {
    onShowRiskTemplates: PropTypes.func,
    data: PropTypes.object
};

Header.defaultProps = {
    titleClassName: undefined,
    data: {}
};

export default Header;
