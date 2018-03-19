import _ from 'lodash';
import {genericResponse} from '../generic-response';
import {baseFlow} from '../base-flow';
import {baseStats} from '../base-stats';
import {properties} from '../../properties';

// Clone imports to not make them dirty
let schema = _.cloneDeep(genericResponse);
let entrySchema = _.cloneDeep(baseFlow);
let stats = _.cloneDeep(baseStats);

stats.items = {
    latency: properties.latency,
    dropPktCount: properties.dropPktCount,
    srcMoveCount: properties.srcMoveCount
};

// Add stats property to entry schema
entrySchema.properties.stats = stats;

// Add stats as required property on entry schema
entrySchema.required = _.union(entrySchema.required, [stats.id]);

// Add entrySchema as schema for generic response entries
schema.properties.entries.items = entrySchema;
export {schema as flowsFlows};
