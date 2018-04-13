import * as d3 from 'd3';
import React from 'react';

export default class Chord extends React.Component {
    constructor(...args) {
        super(...args);
        const {width, height} = this.props;

        const outerRadius = Math.min(width, height) * 0.5 - 40;
        const innerRadius = outerRadius - 20;

        this.state = {
            selections: [],
            ...this._prepareData()
        };

        this.highlight = this.highlight.bind(this);
    }

    _prepareData(data = this.props.data) {
        const indexMapping = {};
        let index = 0;
        const matrix = [];
        data.forEach(row => {
            indexMapping[index] = row;
            index++;
            matrix[row.from] = data.map(column => {
                return row.to.includes(column.from) ? column.to.length : 0;
            });
        });
        return {matrix, indexMapping};
    }

    getColor(index) {
        return this.state.indexMapping[index].color;
    }

    render() {
        const styles = {
            width: `${this.props.width}px`,
            height: `${this.props.height}px`
        };

        return (
            <div className="chord-wrap" style={styles}>
                <svg ref={node => this.svg = d3.select(node)}/>
                {this.chord(this.state.matrix).groups.map(this.renderLabel, this)}
            </div>
        );
    }

    renderLabel(d) {
        const angle = (d.startAngle + d.endAngle) / 2;
        const rotation = angle * 180 / Math.PI - 90;
        let transform = `
      translate(-50%, -50%)
      rotate(${rotation}deg)
      translate(${this.innerRadius + 26}px)
      ${angle > Math.PI ? 'rotate(180deg)' : ''}
      ${angle > Math.PI ? 'translate(-50%)' : 'translate(50%)'}
    `;
        let classNames = ['label'];
        if (this.state.selections.includes(d.index)) {
            classNames.push('highlight');
        }

        return (
            <div key={this.state.indexMapping[d.index].label} className={classNames.join(' ')} style={{transform}} onClick={this.highlight.bind(this, d, d.index)}>
                {this.state.indexMapping[d.index].label}
            </div>
        );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            ...this._prepareData(nextProps.data)
        });
    }

    componentDidMount() {
        const {width, height} = this.props;

        const arc = d3.arc()
            .innerRadius(this.innerRadius)
            .outerRadius(this.outerRadius);

        let ribbon = d3.ribbon()
            .radius(this.innerRadius);

        let center = this.svg.append('g')
            .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
            .datum(this.chord(this.state.matrix));

        let group = center.append('g')
            .attr('class', 'groups')
            .selectAll('g')
            .data(function(chords) {
                return chords.groups;
            })
            .enter().append('g');

        group.append('path')
            .attr('class', 'arc')
            .style('fill', d => this.getColor(d.index))
            .style('stroke', d => d3.rgb(this.getColor(d.index)).darker())
            .attr('d', arc)
            .on('click', this.highlight);

        this.chords = center.append('g')
            .attr('class', 'ribbons')
            .selectAll('path')
            .data(function(chords) {
                return chords;
            })
            .enter().append('path')
            .attr('d', ribbon)
            .style('fill', d => this.getColor(d.target.index))
            .style('stroke', d => d3.rgb(this.getColor(d.target.index)).darker());
    }

    highlight(d, index) {
        let newSelections = [];
        if (this.state.selections.length <= 1) {
            newSelections = [...this.state.selections, index];
            if (this.state.selections.includes(index)) {
                newSelections = [];
            }
        } else {
            newSelections = [index];
        }

        this.setState({
            selections: newSelections
        }, () => {
            const selections = this.state.selections;
            this.chords.classed('fade', (p) => {
                if (!selections.length) {
                    return false;
                }

                if (selections.length === 1) {
                    return !selections.includes(p.source.index) && !selections.includes(p.target.index);
                }

                const isSelected = p.source.index === selections[0] && p.target.index === selections[1];
                const isInversed = p.source.index === selections[1] && p.target.index === selections[0];

                return !isSelected && !isInversed;
            });
        });
    }

    get chord() {
        return d3.chord()
            .padAngle(0.05)
            .sortSubgroups(d3.descending);
    }

    get outerRadius() {
        const {width, height} = this.props;
        return Math.min(width, height) * 0.5 - 40;
    }

    get innerRadius() {
        return this.outerRadius - 20;
    }
}