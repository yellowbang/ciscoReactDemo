/* eslint-disable space-before-function-paren,no-trailing-spaces */
import React from 'react';
import PropTypes from 'prop-types';
import '../scss/components.scss';
import {Icon} from 'cisco-ui-components';

class Line extends React.Component {
    constructor () {
        super();
    }

    render () {
        return (
            <div className="line"/>
        );
    }
}

class Point extends React.Component {
    constructor () {
        super();
    }
}

class BigPoint extends Point {
    constructor () {
        super();
    }

    render () {
        return (
            <div className="big-point-container">
                <div className="big-circle">E</div>
                <div className="foot-note-container">
                    <div className="major-foot-note">{this.props.data.name}</div>
                    <div className="minor-foot-note">{this.props.data.tenant}</div>
                </div>
            </div>
        );
    }
}

class SmallPoint extends Point {
    constructor () {
        super();
    }

    render () {
        return (
            <div className="small-point-container">
                <div className="small-circle"/>
                <div className="small-point-foot-note">{this.props.data.name}</div>
            </div>
        );
    }
}

class PointToPoint extends React.Component {
    constructor () {
        super();
    }

    render () {
        const me = this;
        let containerNameClass = 'point-to-point-container';
        if (me.props.containerNameClass) {
            containerNameClass = containerNameClass + ' ' + me.props.containerNameClass;
        }

        let points = [];
        me.props.points.forEach(function(point, index) {
            if (index !== 0) {
                points.push(<Line key={'line' + index}/>);
            }
            if (index === 0 || index === me.props.points.length - 1) {
                points.push(<BigPoint key={point.name} data={point}/>);
            } else {
                points.push(<SmallPoint key={point.name} data={point}/>);
            }
        });

        return (
            <div className={containerNameClass}>
                {points}
            </div>
        );
    }
}

PointToPoint.propTypes = {
    containerNameClass: PropTypes.string,
    points: PropTypes.array,
    onTileClicked: PropTypes.func
};

PointToPoint.defaultProps = {
    points: [],
    data: {}
};

export default PointToPoint;
