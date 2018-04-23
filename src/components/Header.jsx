/* eslint-disable space-before-function-paren,no-trailing-spaces */
import React from 'react';
import PropTypes from 'prop-types';
import '../scss/components.scss';
import {Icon, IconButton} from 'cisco-ui-components';

class Header extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.oncClickCog = this.oncClickCog.bind(this);
    }

    oncClickCog () {

    }

    shouldComponentUpdate (nextProps, nextState) {
        return true;
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
                <IconButton
                    size={IconButton.SIZE.LARGE}
                    icon={IconButton.ICON.COG}
                    type={'header-button'}
                    onClick={this.oncClickCog}
                />
            </div>
        );
    }
}

Header.propTypes = {
    titleClassName: PropTypes.string,
    onClick: PropTypes.func,
    data: PropTypes.object
};

Header.defaultProps = {
    titleClassName: undefined,
    data: {}
};

export default Header;
