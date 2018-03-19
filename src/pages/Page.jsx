import React from 'react';
import PropTypes from 'prop-types';
import {Panel} from 'cisco-ui-components';
import PageHeader from './PageHeader';


/**
 * Page component intended for the "content-view."  @see App.scss, Page1.jsx, Page2.jsx
 */
export default class Page extends React.Component {
    render() {
        return (

            <div className="content-view" id={this.props.pageId}>
                <PageHeader label={this.props.headerLabel}/>
                <div className="content-view-body">
                    <Panel raised={Panel.RAISED.SMALL}>
                        {this.props.children}
                    </Panel>
                </div>
            </div>
        );
    }
}

// type-check props for this component
Page.propTypes = {
    pageId: PropTypes.string.isRequired,
    headerLabel: PropTypes.string,
    children: PropTypes.node
};
