import queryString from 'query-string';
import {Interface, AbstractClass} from './lang';
import api from './api';
import {mockApiData} from './mock/api';

import _ from 'lodash';
import {BASE_URI, PATHS, METHOD_NAMES, EXT} from './endpoint-constants';

/**
 * Interface for implementing TelemetryApiI-s
 */
let TelemetryApiI = Interface(
    /**
     * Returns an iterator of items from the the current selection set.
     *
     * ex.
     * for (let selection of sm.selections) { console.log(selection); }
     *
     * @returns {Iterator.<String>} iterator for list of keys from the current selection set.
     */
    METHOD_NAMES
);

/**
 *  Abstract implementation.  Adds the 'get' method
 * 'get' is left for concrete class implementation.
 *
 *  !!! It is left to concrete subclasses to implement #fireRequestsChanged !!!
 */
class AbstractTelemetryApi extends AbstractClass(TelemetryApiI, [
    /**
     * Require subclass to implement get
     *
     * @protected (can only be used within subclasses.  method is not public)
     * @param {String} path
     */
    'get'
]) {

}

// Constants

// Number of items considered within the 'top' category.
const TOP_COUNT = 5;

/**
 * Abstract.  Implements all of the methods defined by the TelemetryApiI interface.  Adds the 'get' method,
 * which is left for concrete class implementations.
 *
 */
class TelemetryApiImpl extends AbstractClass(AbstractTelemetryApi, []) {
    /**
     * Returns a promise for getting the top nodes with the largest queue sizes.
     *
     * @implements AbstractTelemetryApi.get
     *
     * @returns {Promise}
     */

    // Using arrow function class property to bind this in the correct execution context.
    // This is needed when we pass Endpoint.api.method to chart components.
    // See https://medium.com/@rjun07a/binding-callbacks-in-react-components-9133c0b396c6

    // GENERIC METHODS
    nodes = (params = {}) => {
        return this.get(PATHS.NODES, params);
    }

    processes = (params = {}) => {
        return this.get(PATHS.PROCESSES, params);
    }

    // DASHBOARD
    cpuTopNodes = (params = {}) => {
        return this.get(PATHS.CPU_TOP_NODES, _.merge(params, {count: TOP_COUNT}));
    }

    cpuTopProcesses = (params = {}) => {
        return this.get(PATHS.CPU_TOP_PROCESSES, _.merge(params, {count: TOP_COUNT}));
    }

    memoryTopNodes = (params = {}) => {
        return this.get(PATHS.MEMORY_TOP_NODES, _.merge(params, {count: TOP_COUNT}));
    }

    memoryTopProcesses = (params = {}) => {
        return this.get(PATHS.MEMORY_TOP_PROCESSES, _.merge(params, {count: TOP_COUNT}));
    }

    queuesTopNodes = (params = {}) => {
        return this.get(PATHS.QUEUES_TOP_NODES, _.merge(params, {count: TOP_COUNT}));
    }

    queuesTopProcesses = (params = {}) => {
        return this.get(PATHS.QUEUES_TOP_PROCESSES, _.merge(params, {count: TOP_COUNT}));
    }

    flowsTopNodes = (params = {}) => {
        return this.get(PATHS.FLOWS_TOP_NODES, _.merge(params, {count: TOP_COUNT}));
    }

    flowsTopProcesses = (params = {}) => {
        return this.get(PATHS.FLOWS_TOP_PROCESSES, _.merge(params, {count: TOP_COUNT}));
    }

    flowsTopFlows = (params = {}) => {
        return this.get(PATHS.FLOWS_TOP_FLOWS, _.merge(params, {count: TOP_COUNT}));
    }

    transactionsTopNodes = (params = {}) => {
        return this.get(PATHS.TRANSACTIONS_TOP_NODES, _.merge(params, {count: TOP_COUNT}));
    }

    transactionsTopProcesses = (params = {}) => {
        return this.get(PATHS.TRANSACTIONS_TOP_PROCESSES, _.merge(params, {count: TOP_COUNT}));
    }

    // BROWSE

    processesBrowse = (params = {}) => {
        return this.get(PATHS.PROCESSES_BROWSE, params);
    }

    flowsBrowse = (params = {}) => {
        return this.get(PATHS.FLOWS_BROWSE, params);
    }

    transactionsBrowse = (params = {}) => {
        return this.get(PATHS.TRANSACTIONS_BROWSE, params);
    }

    systemSystem = (params = {}) => {
        return this.get(PATHS.SYSTEM_SYSTEM, params);
    }

    flowsFlows = (params = {}) => {
        return this.get(PATHS.FLOWS_FLOWS, params);
    }

    queuesQueues = (params = {}) => {
        return this.get(PATHS.QUEUES_QUEUES, params);
    }

    transactionsTransactions = (params = {}) => {
        return this.get(PATHS.TRANSACTIONS_TRANSACTIONS, params);
    }
}

/**
 * Mock implementation of the TelemetryApiI api.
 */
class MockTelemetryApi extends TelemetryApiImpl {
    /**
     * Returns a promise for resolving the requested path.
     *
     * @implements AbstractTelemetryApi.get
     *
     * @returns {Promise}
     */
    get(path, params) {
        return new Promise((resolve) => {
            resolve(mockApiData.get(path, params));
        });
    }
}

/**
 * Http based implementation of the TelemetryApiI api.
 */
class HttpTelemetryApi extends TelemetryApiImpl {
    /**
     * Returns a promise for resolving the requested path.
     *
     * @implements AbstractTelemetryApi.get
     *
     * @returns {Promise}
     */
    get(path, params) {
        let qs = params !== {} ? `?${queryString.stringify(params)}` : '';
        return api.get(`${BASE_URI}/${path}.${EXT}${qs}`);
    }
}

// private properties
/* let _api = Symbol('api');
class Foo {
    constructor(mock) {
        this[_api] = mock ? new MockTelemetryApi() : new HttpTelemetryApi();
    }
}*/

let mockApi;
let httpApi;

/**
 * Expose the Endpoint API via a proxy which controls the 'api' property.
 *
 * @example
 *
 * Endpoint.api.queuesTopNodes().then(response => { ... })
 *
 * @type {Proxy}
 */
let Endpoint = new Proxy({
    mock: false,
    api
},
{
    get: function(obj, prop) {
        // An extra property
        if (prop === 'api') {
            // lazy create api
            if (obj.mock && !mockApi) {
                mockApi = new MockTelemetryApi();
            } else if (!httpApi) {
                httpApi = new HttpTelemetryApi();
            }

            return obj.mock ? mockApi : httpApi;
        }

        // The default behavior to return the value
        return obj[prop];
    },
    set: function(obj, prop, value) {
        // don't allow api prop to be set
        if (prop !== 'api') {
            // The default behavior to store the value
            obj[prop] = value;

            // Indicate success
            return true;
        }

        return false;
    }
});

// comment out if http based api is desired.
// Endpoint.mock = true;

/*
try {
    // should produce error as TelemetryApiImpl is abstract (does not implement fireSelectionsChanged)

    let o = new TelemetryApiImpl();
    console.error('Unexpected!!!  Abstract class instantiated (Check implementation of AbstractClass [lang.js]): %O', o);
} catch (thrown) {
    console.error('expected: %O', thrown);
}

// AbstractTelemetryApi
try {
    // should produce error as AbstractTelemetryApi is abstract (does not implement fireSelectionsChanged)
    let o = new AbstractTelemetryApi();
    console.error('Unexpected!!!  Abstract class instantiated (Check implementation of AbstractClass [lang.js]): %O', o);
} catch (thrown) {
    console.error('expected: %O', thrown);
}

try {
    // should produce error as TelemetryApiI is abstraction
    let o = new TelemetryApiI();
    console.error('Unexpected!!!  Abstract class instantiated (Check implementation of Interface [lang.js]): %O', o);
} catch (thrown) {
    console.error('expected: %O', thrown);
}
*/
export default Endpoint;
