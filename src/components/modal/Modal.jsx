import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'cisco-ui-components';
import './Modal.scss';

class Modal extends Component {
    getStyles() {
        return {
            width: this.props.width && this.props.width
        };
    }

    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <div className="telemetry-dialog-dialog-wrap">
                <div className="telemetry-dialog" style={this.getStyles()}>
                    <div className="telemetry-dialog-header">
                        {this.props.title && <h1 className="telemetry-dialog-title">{this.props.title}</h1>}
                    </div>

                    <div className="telemetry-dialog-content">
                        {this.props.children}
                    </div>

                    <div className="telemetry-dialog-footer">
                        <Button type={Button.TYPE.PRIMARY} size={Button.SIZE.SMALL} onClick={this.props.onClose}>Close</Button>
                    </div>
                </div>
                {this.renderOverlay()}
            </div>
        );
    }

    renderOverlay() {
        if (this.props.closeOnClickOutside) {
            return <div className="telemetry-dialog-overlay" onClick={this.props.onClose}></div>
        }
        return <div className="telemetry-dialog-overlay"></div>
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node,
    title: PropTypes.string,
    closeOnClickOutside: PropTypes.bool,
    width: PropTypes.string // any value as specified here: https://developer.mozilla.org/en-US/docs/Web/CSS/width.
};

Modal.defaultProps = {
    closeOnClickOutside: false
};
export default Modal;
