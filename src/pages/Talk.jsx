import React from 'react';
import PropTypes from 'prop-types';

import {IconButton} from 'cisco-ui-components';
// import constants from '../constants';

import './Talk.scss';

class Talk extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    shouldComponentUpdate (nextProps) {
        return nextProps.selectedTiles !== this.props.selectedTiles ;
    }

    render () {
        let selectedTile1 = this.props.selectedTiles[0];
        let selectedTile2 = this.props.selectedTiles[1];
        let selectedTile1Name, selectedTile2Name;
        if (selectedTile1) {
            selectedTile1Name = selectedTile1.name;
        }
        if (selectedTile2) {
            selectedTile2Name = selectedTile2.name;
        }

        return (
            <div className="talk-page-container">
                <div className="talk-page-header">
                    <div className="talk-page-header-left">
                        <h4>{selectedTile1Name + ' and ' + selectedTile2Name} </h4>
                    </div>
                    <IconButton
                        size={IconButton.SIZE.LARGE}
                        icon={IconButton.ICON.CLOSE}
                        type={'close-button'}
                        onClick={this.props.closeTalkPage}/>
                </div>
            </div>
        );
    }
}

Talk.propTypes = {
    closeTalkPage: PropTypes.func,
    selectedTiles: PropTypes.array
};

Talk.defaultProps = {
    selectedTiles: []
};

export default Talk;
