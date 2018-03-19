import React from 'react';
import {Icon, IconButton} from 'cisco-ui-components';
import PropTypes from 'prop-types';
/**
 * @class PageHeader
 * @extends React.Component
 * @param {string} label Value to be displayed in the header
 * @param {function} handleClick Function to be called when reset icon is clicked
 */
class PageHeader extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="content-view-header">
                <span className="item"><h4>{this.props.label}</h4></span>
                <span className="item item-end" />
            </div>
        );
    }
}

PageHeader.propTypes = {
    label: PropTypes.string,
    handleClick: PropTypes.func
};

export default PageHeader;
