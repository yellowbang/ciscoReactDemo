import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Icon} from 'cisco-ui-components';
import Modal from '../modal/Modal';

class Dialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            closed: true
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleOnClose = () => {
        this.props.onChange(Dialog.ACTIONS.CLOSED);
    }

    render() {
        if( !this.props.show ) {
            return (null);
        }

        let buttons = [];

        return (<Modal show={true} title={this.props.title} width="auto" onClose={this.handleOnClose}>
            <div>{this.props.message}</div>
            <div>{buttons}</div>
        </Modal>);
    }
}

// Used to determine the icon to show, default title (if none is provided), etc.)
Dialog.MESSAGE_TYPES = {
    ERROR: 4, // error styling (e.g. error icon)
    WARN: 3, // warning styling (e.g. warning icon)
    QUESTION: 2, // question styling (e.g. question icon)
    INFO: 1, // info styling (e.g. info icon)
    PLAIN: 0 // plain styling (e.g. no icon)
}
// predefined options for available actions (i.e. buttons)
/*Dialog.ACTION_SETS = {
    YES_NO,  // used for confirmation dialogs
    YES_NO_CANCEL,  // used for confirmation dialogs
    OK_CANCEL  // used for confirmation dialogs
}*/
// action taken by user

Dialog.ACTIONS = {YES: 2, NO: 1, CANCEL: 0, CLOSED: -1}

Dialog.propTypes = {
    // message to be shown in body of dialog
    message: PropTypes.string.isRequired,
    // dialog title
    title: PropTypes.string,
    // type of message (e.g. err, info, ...)
    messageType: PropTypes.number,
    actions: PropTypes.array,
    defaultAction: PropTypes.object,

    // custom icon when one of MESSAGE_TYPES does not suffice
    icon: PropTypes.string, // e.g. Icon.TYPE.INFO

    show: PropTypes.bool,
    onChange: PropTypes.func
};

Dialog.defaultProps = {
    messageType: Dialog.MESSAGE_TYPES.PLAIN,
    actions: [],

    show: false
};

export default Dialog;

