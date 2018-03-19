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
    percentCpu: properties.percentCpu,
    percentMem: properties.percentMem
};

// Add stats property to entry schema
entrySchema.properties.stats = stats;

// Add stats as required property on entry schema
entrySchema.required = _.union(entrySchema.required, [stats.id]);

// Force generation of just one entry in entries (for the item we are looking for)
schema.properties.entries.minItems = 1;
schema.properties.entries.maxItems = 1;

// Add entrySchema as schema for generic response entries
schema.properties.entries.items = entrySchema;
export {schema as systemSystem};
