import CONSTANTS from '../constants';
// ACI app correct BASE_URI
//const BASE_URI = document.location.origin + `/appcenter/Cisco/${CONSTANTS.APP_ID}`;
const BASE_URI = 'https://swsdk17.insieme.local:5688/api/telemetry'

const RESOURCES = {
    CPU: 'cpu',
    FLOWS: 'flows',
    MEMORY: 'memory',
    QUEUES: 'queues',
    TRANSACTIONS: 'transactions'
};

const ENDPOINTS = {
    BROWSE: 'browse',
    TOP_NODES: 'topNodes',
    TOP_PROCESSES: 'topProcesses',
    TOP_FLOWS: 'topFlows',
    NODES: 'nodes',
    PROCESSES: 'processes',
    SYSTEM: 'system'
};

const EXT = 'json';
const METHOD_NAMES = [
    'nodes',
    'processes',
    'cpuTopNodes',
    'memoryTopNodes',
    'queuesTopNodes',
    'flowsTopNodes',
    'transactionsTopNodes',
    'cpuTopProcesses',
    'memoryTopProcesses',
    'queuesTopProcesses',
    'flowsTopProcesses',
    'transactionsTopProcesses',
    'flowsTopFlows',
    'transactionsBrowse',
    'processesBrowse',
    'flowsBrowse',
    'systemSystem',
    'flowsFlows',
    'queuesQueues',
    'transactionsTransactions'
];

const PATHS = {
    NODES: 'nodes',
    PROCESSES: 'processes',
    CPU_TOP_NODES: 'cpu/topNodes',
    MEMORY_TOP_NODES: 'memory/topNodes',
    QUEUES_TOP_NODES: 'queues/topNodes',
    FLOWS_TOP_NODES: 'flows/topNodes',
    TRANSACTIONS_TOP_NODES: 'transactions/topNodes',
    CPU_TOP_PROCESSES: 'cpu/topProcesses',
    MEMORY_TOP_PROCESSES: 'memory/topProcesses',
    QUEUES_TOP_PROCESSES: 'queues/topProcesses',
    FLOWS_TOP_PROCESSES: 'flows/topProcesses',
    TRANSACTIONS_TOP_PROCESSES: 'transactions/topProcesses',
    FLOWS_TOP_FLOWS: 'flows/topFlows',
    PROCESSES_BROWSE: 'processes/browse',
    TRANSACTIONS_BROWSE: 'transactions/browse',
    FLOWS_BROWSE: 'flows/browse',
    SYSTEM_SYSTEM: 'system/system',
    FLOWS_FLOWS: 'flows/flows',
    QUEUES_QUEUES: 'queues/queues',
    TRANSACTIONS_TRANSACTIONS: 'transactions/transactions'
};

export {BASE_URI, RESOURCES, ENDPOINTS, METHOD_NAMES, PATHS, EXT};
