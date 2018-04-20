import React from 'react';
import PropTypes from 'prop-types';
import {IconButton} from 'cisco-ui-components';
import {Typeahead} from 'react-bootstrap-typeahead';
import constants from '../constants';

class CustomTypeahead extends React.Component {
    constructor (...args) {
        super(...args);
        this.state = {
            searchText: '',
            typeaheadOptions: constants.DEMO_TYPE_AHEAD_OPTIONS
        };
        this.onClickClearButton = this.onClickClearButton.bind(this);
    }

    updateTypeaheadOptions (searchText) {
        console.log('------ searchTexr', searchText);
        if (Array.isArray(searchText)) {
            searchText = searchText[0] && searchText[0].key;
        }
        this.setState({searchText});
    }

    getValue () {
        return this.state.searchText;
    }

    onClickClearButton () {
        this.typeahead.getInstance().clear();
    }

    _setOptions () {

    }

    componentWillReceiveProps (nextProps) {
        this.setState({});
    }

    shouldComponentUpdate (nextProps, nextState) {
        return nextState.typeaheadOptions !== this.state.typeaheadOptions;
    }

    render () {
        const me = this;

        return (
            <div className="typeahead-container">
                <Typeahead
                    labelKey="key"
                    options={this.state.typeaheadOptions}
                    minLength={1}
                    className="typeahead-bar"
                    onChange={this.updateTypeaheadOptions.bind(this)}
                    onInputChange={this.updateTypeaheadOptions.bind(this)}
                    ref={function(typeahead) {
                        me.typeahead = typeahead;
                    }}
                />
                <div className="clear-button-container">
                    <IconButton
                        size={IconButton.SIZE.SMALL}
                        icon={IconButton.ICON.CLOSE}
                        type={'close-button'}
                        onClick={this.onClickClearButton}/>
                </div>
            </div>
        );
    }
}

CustomTypeahead.propTypes = {
};

CustomTypeahead.defaultProps = {
    model: 'demo'
};

export default CustomTypeahead;
