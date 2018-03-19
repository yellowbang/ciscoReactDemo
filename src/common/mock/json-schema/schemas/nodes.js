import {genericResponse} from './generic-response';
import {baseNode} from './base-node';
import _ from 'lodash';

let schema = _.cloneDeep(genericResponse);

// Add baseNode as schema for generic response entries
schema.properties.entries.items = baseNode;

export {schema as nodes};
