import _ from 'lodash';
import {jsf, faker} from './faker';

// PLEASE ORDER ALPHABETICALLY
const properties = {
    cpu_usage: {
        type: 'integer',
        faker: 'custom.percentage'
    },
    description: {
        type: 'string'
    },
    dstIp: {
        type: 'string',
        faker: 'custom.ipAddress'
    },
    dstEpg: {
        type: 'string',
        faker: 'custom.epg'
    },
    dstPort: {
        type: 'integer',
        faker: 'custom.port'
    },
    dropCount: {
        type: 'integer',
        minimum: 0
    },
    dropPktCount: {
        type: 'integer',
        minimum: 0
    },
    egressVrf: {
        type: 'string'
    },
    epmove: {
        type: 'integer',
        minimum: 0,
        maximum: 100
    },
    flowId: {
        type: 'string',
        faker: 'custom.flowId'
    },
    flowType: {
        type: 'string',
        faker: 'custom.flowType'
    },
    flowPath: {
        type: 'array',
        faker: 'custom.flowPath'
    },
    ingressVrf: {
        type: 'string',
        faker: {
            'custom.prefixedName': ['vrf']
        }
    },
    latency: {
        type: 'integer',
        minimum: 0,
        maximum: 100
    },
    logQ: {
        type: 'integer',
        minimum: 0,
        maximum: 10000
    },
    mem_used: {
        type: 'integer',
        minimum: 0,
        maximum: 16000
    },
    mtsq_total: {
        type: 'integer',
        minimum: 0,
        maximum: 10000
    },
    nodeName: {
        type: 'string',
        faker: 'custom.nodeName'
    },
    npersQ: {
        type: 'integer',
        minimum: 0,
        maximum: 10000
    },
    percentCpu: {
        type: 'integer',
        faker: 'custom.percentage'
    },
    percentMem: {
        type: 'integer',
        faker: 'custom.percentage'
    },
    persQ: {
        type: 'integer',
        minimum: 0,
        maximum: 10000
    },
    pktdrop: {
        type: 'integer',
        minimum: 0,
        maximum: 10000
    },
    processName: {
        type: 'string',
        faker: 'custom.processName'
    },
    processMtsQ: {
        type: 'integer',
        minimum: 0
    },
    protocol: {
        type: 'integer',
        minimum: 0
    },
    protocolName: {
        type: 'string',
        faker: 'custom.protocolName'
    },
    recvQ: {
        type: 'integer',
        minimum: 0,
        maximum: 10000
    },
    srcEpg: {
        type: 'string',
        faker: 'custom.epg'
    },
    srcIp: {
        type: 'string',
        faker: 'custom.ipAddress'
    },
    srcMoveCount: {
        type: 'integer',
        minimum: 0
    },
    srcPort: {
        type: 'integer',
        faker: 'custom.port'
    },
    rssMemKB: {
        type: 'integer',
        minimum: 0
    },
    transactionId: {
        type: 'integer',
        minimum: 0
    }
};

for (let k in properties) {
    if (properties.hasOwnProperty(k)) {
        // Assign json schema ref id equal to property key
        properties[k].id = k;
    }
}

/**
 * Return a generated value for a specific property
 * @param propName
 * @param opts
 * @returns {*}
 */
const getGeneratedValue = (propName, opts = {}) => {
    let value;
    if (properties[propName]) {
        // If faker property exists then use the related function to generate value
        let fakerFn = _.get(faker, properties[propName].faker);
        if (_.isFunction(fakerFn)) {
            // We are calling custom faker which is using faker.js
            // This has configuration properties with slightly names
            // (e.g. 'min' instead 'minimum' as used by json-schema-faker)
            opts.min = opts.minimum || opts.min;
            opts.max = opts.maximum || opts.max;
            value = fakerFn(opts);
        }

        if (_.isUndefined(value)) {
            // Get value delegating its generation to json-schema-faker if faker property is not defined
            let extendedProperty = _.merge({}, properties[propName], opts);
            value = jsf(extendedProperty);
        }
    }
    return value;
}

export {properties, getGeneratedValue};
