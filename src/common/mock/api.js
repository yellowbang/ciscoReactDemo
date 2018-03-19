import _ from 'lodash';
import {GET} from '../api';
import {PATHS} from '../endpoint-constants';
import {Loader} from './json-schema/loader';
import {properties} from './json-schema/properties';
import {Injector} from './Injector';
import moment from 'moment';

let cachedResponses = {};
let cachedNodeNames = [];

const setCachedResponse = (response, path, params) => {
    let uniqueKey = path + JSON.stringify(params);
    cachedResponses[uniqueKey] = response;
}

const getCachedResponse = (path, params) => {
    let uniqueKey = path + JSON.stringify(params);
    return cachedResponses[uniqueKey];
}

const processApi = (method, path, params) => {
    params.fromTimestamp = params.fromTimestamp || moment().subtract(1, 'hours').format();
    params.toTimestamp = params.toTimestamp || moment().format();
    params.count = params.count || 5;
    params.offset = params.offset || 0;

    let loader = new Loader(path, params);
    let res = loader.export();

    return new Promise((resolve, reject) => {
        res.then((response) => {
            let cachedResponse = getCachedResponse(path, params);
            if (cachedResponse) {
                resolve(cachedResponse);
                return;
            }

            let injector = new Injector(response, path, params);

            // Loads default.json configuration
            injector.addConfiguration('default');

            switch (path) {
                case PATHS.NODES:
                case PATHS.CPU_TOP_NODES:
                case PATHS.MEMORY_TOP_NODES:
                case PATHS.QUEUES_TOP_NODES:
                case PATHS.FLOWS_TOP_NODES:
                        injector.addNodesFromConfig();
                    break;
                case PATHS.PROCESSES_BROWSE:
                case PATHS.FLOWS_BROWSE:
                    injector.setTotals();
                    break;
                case PATHS.SYSTEM_SYSTEM:
                case PATHS.QUEUES_QUEUES:
                case PATHS.FLOWS_FLOWS:
                    injector.setTopLevelProperties({
                        nodeName: params.nodeName,
                        resourceStat: params.resourceStat,
                        description: ''
                    });
                    break;
                default:
                    break;
            }

            injector.orderBy(params.orderBy);

            response = injector.getResponse();
            setCachedResponse(response, path, params);
            resolve(response);
        });
    });
}

const mockApiData = {
    get: (path, params) => {
        return processApi(GET, path, params);
    }
};

export {mockApiData};
