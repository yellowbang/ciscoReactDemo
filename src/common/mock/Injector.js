import _ from 'lodash';
import {properties, getGeneratedValue} from './json-schema/properties';
import {getTimestampsRange} from './utils';
import {PATHS} from '../endpoint-constants';

/**
 * The purpose of this class is applying settings defined in the configuration file to the outgoing response
 */
class Injector {

    constructor(response, path, params) {
        this.response = response;
        this.path = path;
        this.params = params;

        // Add timestamp to statistics (when needed) based on requested fromTimestamp and toTimestamp parameters
        if (this.response.entries.length > 0 && !_.isUndefined(this.response.entries[0].stats)) {
            this.addTimestampToStats();
        }
    }

    addConfiguration(configName) {
        this.config = require(`./config/${configName}`);
    }

    addTimestampToStats() {
        let timestamps = getTimestampsRange(this.params.fromTimestamp, this.params.toTimestamp);
        for (let i = 0; i < this.response.entries.length; i++) {
            for (let j = 0; j < this.response.entries[i].stats.length; j++) {
                this.response.entries[i].stats[j].timestamp = timestamps[j];
            }
        }
    }

    addNodesFromConfig() {
        const mergeNodes = (destination, source) => {
            let configStats = _.cloneDeep(source.stats);
            destination = _.merge({}, destination, source);

            if (this.path === PATHS.NODES) {
                delete destination.stats;
            }

            if (!_.isUndefined(configStats) && !_.isUndefined(destination.stats)) {
                for (let propName in configStats.properties) {
                    if (configStats.properties.hasOwnProperty(propName)) {
                        let configStatsProp = configStats.properties[propName];
                        // If config property is a valid property
                        if (!_.isUndefined(properties[propName])) {
                            for (let j = 0; j < destination.stats.length; j++) {
                                // If config property exists on destination node
                                if (!_.isUndefined(destination.stats[j][propName])) {
                                    // Overwrite stats property on destination node with specific or generated values based on configuration
                                    let configValue = _.get(configStatsProp, `values[${j}]`);
                                    destination.stats[j][propName] = _.isUndefined(configValue)
                                        ? getGeneratedValue(propName, configStatsProp.fakerOpts) :
                                        configValue;
                                }
                            }
                        }
                    }

                }
            }
            return destination;
        };

        // Add mocked nodes defined in configuration
        if (this.config.nodes.length > 0) {
            for (let j = 0; j < this.config.nodes.length; j++) {
                this.response.entries[j] = mergeNodes(this.response.entries[j], this.config.nodes[j]);
            }
        }
    }

    /**
     * Replace names of random generated nodes with nodes available (loaded @ /nodes.json)
     * @param nodeNames
     */
    setNodeNames(nodeNames) {
        if (nodeNames.length > 0) {
            let configNodesNames = _.map(this.config.nodes, properties.nodeName.id);
            let generatedNodes = _.difference(nodeNames, configNodesNames);
            let randomAvailableNodes = [];
            // Add first nodes defined in the configuration
            for (let j = 0; j < configNodesNames.length; j++) {
                randomAvailableNodes.push(configNodesNames[j]);
            }

            // Then add generated nodes until the array reaches size of params.count
            for (let i = 0; randomAvailableNodes.length < this.params.count && i < this.params.count && i < this.response.entries.length; i++) {
                // Pick randomly a node for the list loaded @ nodes.json
                let node = generatedNodes.splice(Math.floor(Math.random() * generatedNodes.length), 1);
                randomAvailableNodes.push(node[0]);
            }

            // Sort node names
            randomAvailableNodes.sort();

            this.response.entries.forEach((entry) => {
                entry.nodeName = randomAvailableNodes.shift();
            });
        }
    }

    setTotals() {
        let total = this.response.entries.length;
        this.response.totalItemsCount = total;
        this.response.totalResultsCount = total;
    }

    setTopLevelProperties(props) {
        for (let k in props) {
            if (props.hasOwnProperty(k)) {
                this.response[k] = props[k];
            }
        }
    }

    orderBy(orderByString) {
        // orderBy
        // e.g. 'nodeName,DESC'
        if (orderByString) {
            let split = orderByString.split(',');
            let orderBy = split[0];
            let order = split[1];
            if (_.isUndefined(order)) {
                order = 'asc';
            }
            this.response.entries = _.orderBy(this.response.entries, [orderBy], [order]);
        }
    }

    getResponse() {
        return this.response;
    }
}

export {Injector};
