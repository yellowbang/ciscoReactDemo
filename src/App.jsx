import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {appActions} from './state/actions/app';

import {Sidebar, Icon, IconButton} from 'cisco-ui-components';


import './App.scss';

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let rootClasses = 'app-container';
        if (!this.props.showSidebar) {
            rootClasses += ' '.concat('app-sidebar--hidden');
        }

        return (
            <div>
                <h1>
                    hello world
                </h1>
            </div>
        );
    }
}

App.propTypes = {
    toggleSidebar: PropTypes.func,
    showSidebar: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => ({
    showSidebar: state.app.showSidebar
});

export default connect(mapStateToProps, appActions)(App);

