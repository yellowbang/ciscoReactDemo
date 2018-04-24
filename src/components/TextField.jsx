/* eslint-disable space-before-function-paren,no-trailing-spaces */
import React from 'react';
import PropTypes from 'prop-types';
import '../scss/components.scss';
import CustomTypeahead from '../components/CustomTypeahead';
import constants from '../constants';

class TextField extends React.Component {
    constructor (...args) {
        super(...args);
        this.state = {};
        this.getValue = this.getValue.bind(this);
    }

    getValue () {
        if (this.props.typeaheadOptions && this.props.typeaheadOptions.length > 0) {
            return this.typeahead.getValue();
        }
        return this.inputField.value;
    }

    render () {
        const me = this;
        let textFieldContainerClassName = 'textField-container';
        if (this.props.textFieldContainerClassName) {
            textFieldContainerClassName = textFieldContainerClassName + ' ' + this.props.textFieldContainerClassName;
        }

        let textFieldTitleClassName = 'textField-title';
        if (this.props.textFieldTitleClassName) {
            textFieldTitleClassName = textFieldTitleClassName + ' ' + this.props.textFieldTitleClassName;
        }

        let textBarClassName = 'textField-bar';
        if (this.props.textBarClassName) {
            textBarClassName = textBarClassName + ' ' + this.props.textBarClassName;
        }

        return (
            <div className={textFieldContainerClassName}>
                <div className={textFieldTitleClassName}>{this.props.title}</div>
                {
                    (this.props.typeaheadOptions && this.props.typeaheadOptions.length > 0) ?
                        <CustomTypeahead
                            typeaheadBarClassName={textBarClassName}
                            typeaheadOptions={this.props.typeaheadOptions}
                            showClearButton={this.props.showClearButton}
                            ref={function(typeahead) {
                                me.typeahead = typeahead;
                            }}/>
                        :
                        <input
                            type="text"
                            name="name"
                            className={textBarClassName}
                            ref={function(inputField) {
                                me.inputField = inputField;
                            }}
                        />
                }
            </div>
        );
    }
}

TextField.propTypes = {
    textFieldContainerClassName: PropTypes.string,
    textFieldTitleClassName: PropTypes.string,
    textBarClassName: PropTypes.string,
    title: PropTypes.element,
    showClearButton: PropTypes.bool,
    typeaheadOptions: PropTypes.array,
    children: PropTypes.element,
    data: PropTypes.object
};

TextField.defaultProps = {
    textFieldContainerClassName: '',
    textFieldTitleClassName: '',
    textBarClassName: '',
    title: '',
    showClearButton: false,
    typeaheadOptions: [],
    children: '',
    data: {}
};

export default TextField;
