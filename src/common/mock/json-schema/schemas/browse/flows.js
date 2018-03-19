import _ from 'lodash';
import {properties} from '../../properties';
import {genericResponse} from '../generic-response';
import {baseFlow} from '../base-flow';
import {baseStats} from '../base-stats';

// Clone imports to not make them dirty
let schema = _.cloneDeep(genericResponse);
let entrySchema = _.cloneDeep(baseFlow);
entrySchema.properties.srcEpg = properties.srcEpg;
entrySchema.properties.srcIp = properties.srcIp;
entrySchema.properties.srcPort = properties.srcPort;
entrySchema.properties.dstIp = properties.dstIp;
entrySchema.properties.dstPort = properties.dstPort;
entrySchema.properties.dstEpg = properties.dstEpg;
entrySchema.properties.egressVrf = properties.egressVrf;
entrySchema.properties.ingressVrf = properties.ingressVrf;
entrySchema.properties.flowType = properties.flowType;
entrySchema.properties.protocol = properties.protocol;
entrySchema.properties.protocolName = properties.protocolName;

let stats = _.cloneDeep(baseStats);
stats.items = {
    latency: properties.latency,
    dropPktCount: properties.dropPktCount,
    srcMoveCount: properties.srcMoveCount,
    dropCount: properties.dropCount,
    path: properties.flowPath
}

// Add stats property to entry schema
entrySchema.properties.stats = stats;

// Add properties as required on entry schema
entrySchema.required = _.union(entrySchema.required, [
    properties.srcEpg.id,
    properties.srcIp.id,
    properties.srcPort.id,
    properties.dstIp.id,
    properties.dstPort.id,
    properties.egressVrf.id,
    properties.ingressVrf.id,
    properties.flowType.id,
    properties.protocol.id,
    properties.protocolName.id,
    stats.id
]);

// Add entrySchema as schema for generic response entries
schema.properties.entries.items = entrySchema;
export {schema as browseFlows};
