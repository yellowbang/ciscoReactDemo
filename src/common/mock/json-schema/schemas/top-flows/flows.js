import _ from 'lodash';
import {genericResponse} from '../generic-response';
import {baseFlow} from '../base-flow';
import {baseStats} from '../base-stats';
import {properties} from '../../properties';

// Clone imports to not make them dirty
let schema = _.cloneDeep(genericResponse);
let entrySchema = _.cloneDeep(baseFlow);

// Add nodeName and description on generic response
schema.properties.nodeName = properties.nodeName;
schema.properties.description = properties.description;

// Add nodeName and description as required properties on schema
schema.required = _.union(schema.required, [
    properties.nodeName.id,
    properties.description.id
]);

let stats = _.cloneDeep(baseStats);
stats.items = {
    latency: properties.latency,
    dropPktCount: properties.dropPktCount,
    srcMoveCount: properties.srcMoveCount
};

// Add stats property to entry schema
entrySchema.properties.stats = stats;

// Add stats as required property on entry schema
entrySchema.required = _.union(entrySchema.required, [
    properties.dstEpg.id,
    properties.dstIp.id,
    properties.dstPort.id,
    properties.egressVrf.id,
    properties.ingressVrf.id,
    properties.flowType.id,
    stats.id
]);

// Add entrySchema as schema for generic response entries
schema.properties.entries.items = entrySchema;
export {schema as flowsTopFlows};
