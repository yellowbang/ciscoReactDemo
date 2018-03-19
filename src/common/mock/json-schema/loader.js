import {PATHS} from '../../endpoint-constants';
import {jsf} from './faker';

import {nodes} from './schemas/nodes';

import {cpuTopNodes} from './schemas/top-nodes/cpu';
import {memoryTopNodes} from './schemas/top-nodes/memory';
import {queuesTopNodes} from './schemas/top-nodes/queues';
import {flowsTopNodes} from './schemas/top-nodes/flows';

import {cpuTopProcesses} from './schemas/top-processes/cpu';
import {memoryTopProcesses} from './schemas/top-processes/memory';
import {queuesTopProcesses} from './schemas/top-processes/queues';

import {browseProcesses} from './schemas/browse/processes';
import {flowsTopFlows} from './schemas/top-flows/flows';
import {browseFlows} from './schemas/browse/flows';

import {systemSystem} from './schemas/detailed/systemSystem';
import {queuesQueues} from './schemas/detailed/queuesQueues';
import {flowsFlows} from './schemas/detailed/flowsFlows';

const pathSchemaMap = {};
pathSchemaMap[PATHS.NODES] = nodes;
pathSchemaMap[PATHS.CPU_TOP_NODES] = cpuTopNodes;
pathSchemaMap[PATHS.CPU_TOP_PROCESSES] = cpuTopProcesses;

pathSchemaMap[PATHS.MEMORY_TOP_NODES] = memoryTopNodes;
pathSchemaMap[PATHS.MEMORY_TOP_PROCESSES] = memoryTopProcesses;

pathSchemaMap[PATHS.QUEUES_TOP_NODES] = queuesTopNodes;
pathSchemaMap[PATHS.QUEUES_TOP_PROCESSES] = queuesTopProcesses;

pathSchemaMap[PATHS.FLOWS_TOP_NODES] = flowsTopNodes;
pathSchemaMap[PATHS.FLOWS_TOP_FLOWS] = flowsTopFlows;

pathSchemaMap[PATHS.PROCESSES_BROWSE] = browseProcesses;
pathSchemaMap[PATHS.FLOWS_BROWSE] = browseFlows;

pathSchemaMap[PATHS.SYSTEM_SYSTEM] = systemSystem;
pathSchemaMap[PATHS.QUEUES_QUEUES] = queuesQueues;
pathSchemaMap[PATHS.FLOWS_FLOWS] = flowsFlows;

/**
 * The purpose of this class is loading the appropriate json schema based on request and return a "generated" version of it
 */
class Loader {
    constructor(path, params) {
        this.path = path;
        this.params = params;
        this.schema = pathSchemaMap[path];

        // see json-schema-faker minItems, maxItems
        if (!this.schema.properties.entries.minItems) {
            this.schema.properties.entries.minItems = Math.min(5, params.count);
        }
        if (!this.schema.properties.entries.maxItems) {
            this.schema.properties.entries.maxItems = Math.max(5, params.count);
        }
    }

    export() {
        return jsf.resolve(this.schema, []);
    }
}

export {Loader};
