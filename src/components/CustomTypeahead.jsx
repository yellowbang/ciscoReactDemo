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
            typeaheadOptions: this.props.typeaheadOptions || []
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
        if (nextProps.typeaheadOptions) {
            this.setState({typeaheadOptions: nextProps.typeaheadOptions});
        }
    }

    shouldComponentUpdate (nextProps, nextState) {
        return nextState.typeaheadOptions !== this.state.typeaheadOptions;
    }

    render () {
        const me = this;
        let typeaheadBarClassName = 'typeahead-bar';
        if (this.props.typeaheadBarClassName) {
            typeaheadBarClassName = typeaheadBarClassName + ' ' + this.props.typeaheadBarClassName;
        }

        return (
            <div className="typeahead-container">
                <Typeahead
                    labelKey="key"
                    options={this.state.typeaheadOptions}
                    minLength={1}
                    className={typeaheadBarClassName}
                    onChange={this.updateTypeaheadOptions.bind(this)}
                    onInputChange={this.updateTypeaheadOptions.bind(this)}
                    ref={function(typeahead) {
                        me.typeahead = typeahead;
                    }}
                />
                {this.props.showClearButton ?
                    <div className="clear-button-container">
                        <IconButton
                            size={IconButton.SIZE.SMALL}
                            icon={IconButton.ICON.CLOSE}
                            type={'close-button'}
                            onClick={this.onClickClearButton}/>
                    </div>
                    :
                    null
                }
            </div>
        );
    }
}

CustomTypeahead.propTypes = {
    typeaheadBarClassName: PropTypes.string,
    typeaheadOptions: PropTypes.array,
    showClearButton: PropTypes.bool
};

CustomTypeahead.defaultProps = {
    typeaheadBarClassName: '',
    showClearButton: true,
    typeaheadOptions: []
};

export default CustomTypeahead;
