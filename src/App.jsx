import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {appActions} from './state/actions/app';

import {Input, Button, Sidebar, Icon, IconButton} from 'cisco-ui-components';

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
            <div className="app-container">
                <h1>
                    hello world
                </h1>
                <h3>
                    input text is: {this.props.text}
                </h3>
                <Input
                    name={'inputField'}
                    value={''}
                    onChange={this.props.onInputFieldChange.bind(this)}/>
                <img className="image-class"
                     src={this.props.imageUrl}
                />
            </div>
        );
    }
}

App.propTypes = {
    toggleSidebar: PropTypes.func,
    showSidebar: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => ({
    text: state.app.text,
    imageUrl: state.app.imageUrl,
    showSidebar: state.app.showSidebar
});

export default connect(mapStateToProps, appActions)(App);

