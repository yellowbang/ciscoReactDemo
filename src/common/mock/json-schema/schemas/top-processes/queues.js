import _ from 'lodash';
import {genericResponse} from '../generic-response';
import {baseProcess} from '../base-process';
import {baseStats} from '../base-stats';
import {properties} from '../../properties';

// Clone imports to not make them dirty
let schema = _.cloneDeep(genericResponse);
let entrySchema = _.cloneDeep(baseProcess);
let stats = _.cloneDeep(baseStats);

stats.items = {
    processMtsQ: properties.processMtsQ
};

// Add stats property to entry schema
entrySchema.properties.stats = stats;

// Add stats as required property on entry schema
entrySchema.required = _.union(entrySchema.required, [stats.id]);

// Add entrySchema as schema for generic response entries
schema.properties.entries.items = entrySchema;
export {schema as queuesTopProcesses};
