import _ from 'lodash';
import {genericResponse} from '../generic-response';
import {properties} from '../../properties';

// Clone imports to not make them dirty
let schema = _.cloneDeep(genericResponse);
let entrySchema = {
    type: 'object',
    properties: {
        percentCpu: properties.percentCpu,
        percentMem: properties.percentMem,
        processMtsQ: properties.processMtsQ,
        processName: properties.processName,
        rssMemKB: properties.rssMemKB
    },
    required: [
        properties.percentCpu.id,
        properties.percentMem.id,
        properties.processMtsQ.id,
        properties.processName.id,
        properties.rssMemKB.id
    ]
};

// Add entrySchema as schema for generic response entries
schema.properties.entries.items = entrySchema;
export {schema as browseProcesses};
