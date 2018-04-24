import React from 'react';
import PropTypes from 'prop-types';
import {
    BasicTable,
    AbstractTableController,
    TableEvent
} from 'cisco-ui-components';
import util from '../common/util';


const COLUMNS = [
    {
        id: 'name',
        Header: 'Name',
        accessor: 'name',
        Cell: (data) => {
            console.log(data);
            return (<a href={data.value}>{data.original.timestamp}</a>);
        }
    }, {
        id: 'type',
        Header: 'Type',
        accessor: 'type'
    }, {
        id: 'flags',
        Header: 'Number of Flags',
        accessor: (record) => util.getNameByDn(record.flags)
    }, {
        id: 'functions',
        Header: '',
        accessor: 'functions',
        Cell: (data) => {
            console.log(data);
            return (<span className="function-column">...</span>);
        }
    }
];

class TableController extends AbstractTableController {
    columns = COLUMNS;

    onFilteredChange () {
    }

    onFetchData (state) {
        return;
    }

    sortByNumber (array, direction, key) {
        return array.sort(function(data1, data2) {
            let value1 = data1[key], value2 = data2[key];

            if (!value1 || value1 === '' || value1 === null || value1 === 'null') {
                return 1;
            } else if (!value2 || value2 === '' || value2 === null || value2 === 'null') {
                return -1;
            }

            let result = Number.parseInt(value1, 10) - Number.parseInt(value2, 10);
            if (direction === 'desc') {
                return -1 * result;
            }
            return result;
        });
    }

    sortByAlphabetically (array, direction, key) {
        return array.sort(function(data1, data2) {
            let value1 = data1[key], value2 = data2[key];

            if (!value1 || value1 === '' || value1 === null || value1 === 'null') {
                return 1;
            } else if (!value2 || value2 === '' || value2 === null || value2 === 'null') {
                return -1;
            }

            if (!value1) {
                value1 = '';
            }
            if (!value2) {
                value2 = '';
            }
            value1 = value1.toUpperCase();
            value2 = value2.toUpperCase();

            let result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

            if (direction === 'desc') {
                return -1 * result;
            }
            return result;
        });
    }

    loadData (allData, goToPage1) {
        let instance = this.instance;
        allData = allData || instance.state.allData;

        if (!allData) {
            return;
        }

        if (instance.state.orderBy && instance.state.direction) {
            allData = this.sortByAlphabetically(allData, instance.state.direction, instance.state.orderBy);
        } else {
            allData = this.sortByAlphabetically(allData, instance.state.direction, COLUMNS[0].id);
        }

        let data = allData.slice(instance.state.page * instance.state.pageSize, (instance.state.page + 1) * instance.state.pageSize);
        instance.setState({
            allData: allData,
            data: data,
            page: goToPage1 ? 0 : instance.state.page,
            pages: Math.ceil(allData.length / instance.state.pageSize),
            total: allData.length
        });
        // this.eventHandler(new TableEvent(TableEvent.DATA_CHANGED, records.length));
    }

    onPageChange (page) {
        let instance = this.instance;
        instance.setState({page: page}, this.loadData.bind(this));
    }

    onPageSizeChange (pageSize) {
        let instance = this.instance;
        instance.setState({
            pageSize: pageSize,
            page: 0,
            pages: Math.ceil(instance.state.total / pageSize)
        }, this.loadData.bind(this));
    }

    onSortedChange (sorted, column) {
        let instance = this.instance;
        let sortId = sorted[0].id;
        let dir = (column && instance.state.orderBy === column.id && instance.state.direction === 'asc') ? 'desc' : 'asc';
        let params = {orderBy: `${sortId}`, direction: dir};
        instance.setState(params, () => {
            this.loadData();
        });
    }

    onResizedChange () {
        // return;
    }

    onExpandedChange () {
        // return;
    }

    onRowClick (rowInfo) {
        this.eventHandler(new TableEvent(TableEvent.ROW_CLICK, rowInfo));
    }

    setEventHandler (eventHandler) {
        this.eventHandler = eventHandler;
    }
}

class TableResult extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            allData: [],
            data: [],
            orderBy: 'name',
            direction: 'asc',
            total: 0,
            page: 0,
            pages: 0
        };

        this.tableController = new TableController();
        this.tableController.setEventHandler(this.onControllerEvent.bind(this));
    }

    componentWillMount () {
    }

    componentDidMount () {
        if (this.props.initialPageSize) {
            this.tableController.onPageSizeChange(this.props.initialPageSize);
        }
    }

    componentWillReceiveProps (nextProps) {
        this.tableController.loadData(nextProps.allData, nextProps.allData !== this.props.allData);
    }

    shouldComponentUpdate (nextProps) {
        return nextProps.allData !== this.props.allData;
    }

    onControllerEvent (evt) {
        switch (evt.type) {
            case TableEvent.DATA_CHANGED:
                break;
            case TableEvent.ROW_CLICK:
                if (this.props.onRowClick) {
                    this.props.onRowClick(evt.payload);
                }
                break;
            default:
        }
    }

    render () {
        return (
            <div>
                <BasicTable
                    pageSizeOptions={[5, 10, 15, 25, 50]}
                    controller={this.tableController}/>
            </div>
        );
    }
}

TableResult.propTypes = {
    initialPageSize: PropTypes.number,
    allData: PropTypes.array,
    onRowClick: PropTypes.func
};

export default TableResult;
