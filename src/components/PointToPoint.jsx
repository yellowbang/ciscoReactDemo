/* eslint-disable space-before-function-paren,no-trailing-spaces */
import React from 'react';
import PropTypes from 'prop-types';
import '../scss/components.scss';

class Line extends React.Component {
    constructor () {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick () {
        this.props.onLineClicked(this.props.lineIndex);
    }

    render () {
        let lineClassName = 'line';
        if (this.props.isSelected) {
            lineClassName = lineClassName + ' selected';
        }
        return (
            <div className="line-container" onClick={this.onClick}>
                <div className={lineClassName}/>
            </div>
        );
    }
}

Line.propTypes = {
    onLineClicked: PropTypes.func,
    isSelected: PropTypes.bool,
    lineIndex: PropTypes.number
};

class Point extends React.Component {
    constructor () {
        super();
    }

    shouldComponentUpdate (nextProps) {
        return nextProps.data !== this.props.data ||
            nextProps.isSelected !== this.props.isSelected;
    }
}
Point.propTypes = {
    data: PropTypes.object,
    isSelected: PropTypes.bool
};

class BigPoint extends Point {
    constructor () {
        super();
    }

    render () {
        let circleClassName = 'big-circle';
        if (this.props.isSelected) {
            circleClassName = circleClassName + ' selected';
        }
        return (
            <div className="big-point-container">
                <div className={circleClassName}>
                    <div>E</div>
                </div>
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
        let circleClassName = 'small-circle';
        if (this.props.isSelected) {
            circleClassName = circleClassName + ' selected';
        }
        return (
            <div className="small-point-container">
                <div className={circleClassName}/>
                <div className="small-point-foot-note">{this.props.data.name}</div>
            </div>
        );
    }
}

class PointToPoint extends React.Component {
    constructor () {
        super();
        this.state = {
            selectedLine: -2
        };
        this.onLineClicked = this.onLineClicked.bind(this);
    }

    onLineClicked (lineIndex) {
        this.setState({selectedLine: lineIndex});
        this.props.onLineClicked(lineIndex);
    }

    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.points !== this.props.points ||
            nextState.selectedLine !== this.state.selectedLine;
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
                points.push(<Line
                    key={'line' + index}
                    onLineClicked={me.onLineClicked}
                    lineIndex={index - 1}
                    isSelected={me.state.selectedLine === index - 1}
                />);
            }
            let pointIsSelected = me.state.selectedLine === index - 1 || me.state.selectedLine === index;
            if (index === 0 || index === me.props.points.length - 1) {
                points.push(
                    <BigPoint
                        key={index + 'key' + point.name}
                        data={point}
                        isSelected={pointIsSelected}
                    />
                );
            } else {
                points.push(
                    <SmallPoint
                        key={index + 'key' + point.name}
                        data={point}
                        isSelected={pointIsSelected}
                    />);
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
    onLineClicked: PropTypes.func
};

PointToPoint.defaultProps = {
    points: [],
    data: {}
};

export default PointToPoint;
