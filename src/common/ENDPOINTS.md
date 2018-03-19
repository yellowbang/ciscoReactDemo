##Endpoint examples:

```js
// in mockData.js uncomment console.log before returning response

...
console.log(resource, endpoint, response);
return response;
```

```js
import Endpoint from 'endpoints';

// GENERIC APIS
console.group('GENERIC APIS');
Endpoint.api.nodes({fromTimestamp: '<timestamp>'});
Endpoint.api.processes({fromTimestamp: '<timestamp>', nodeName: '<nodeName>'});
console.groupEnd();

// DASHBOARD APIS
console.group('DASHBOARD APIS');
// Queues
Endpoint.api.queuesTopNodes({fromTimestamp: '<timestamp>', resourceStat: 'aggr'}); // aggr|recv|pers|npers|log
Endpoint.api.queuesTopProcesses({fromTimestamp: '<timestamp>', nodeName: '<nodeName>', resourceStat: 'aggr'}); // aggrrecv,pers OR npers OR log

// CPU
Endpoint.api.cpuTopNodes({fromTimestamp: '<timestamp>'});
Endpoint.api.cpuTopProcesses({fromTimestamp: '<timestamp>', nodeName: '<nodeName>'});

// Memory
Endpoint.api.memoryTopNodes({fromTimestamp: '<timestamp>'});
Endpoint.api.memoryTopProcesses({fromTimestamp: '<timestamp>', nodeName: '<nodeName>'});

// Flows
Endpoint.api.flowsTopNodes({fromTimestamp: '<timestamp>', resourceStat: 'latency'});
Endpoint.api.flowsTopNodes({fromTimestamp: '<timestamp>', resourceStat: 'pktdrop'});
Endpoint.api.flowsTopNodes({fromTimestamp: '<timestamp>', resourceStat: 'epmove'});
Endpoint.api.flowsTopProcesses({fromTimestamp: '<timestamp>', nodeName: '<nodeName>'});
Endpoint.api.flowsTopFlows({nodeName: '<nodeName>', fromTimestamp: '<timestamp>', resourceStat: 'latency'});
Endpoint.api.flowsTopFlows({nodeName: '<nodeName>', fromTimestamp: '<timestamp>', resourceStat: 'pktdrop'});
Endpoint.api.flowsTopFlows({nodeName: '<nodeName>', fromTimestamp: '<timestamp>', resourceStat: 'epmove'});

// Transactions
Endpoint.api.transactionsTopNodes({fromTimestamp: '<timestamp>'});
Endpoint.api.transactionsTopProcesses({fromTimestamp: '<timestamp>', nodeName: '<nodeName>'});
console.groupEnd();

// BROWSE APIS
console.group('BROWSE APIS');
Endpoint.api.processesBrowse({fromTimestamp: '<timestamp>', nodeName: '<nodeName>'}); // add filter + orderby post demo
Endpoint.api.flowsBrowse({fromTimestamp: '<timestamp>', nodeName: '<nodeName>'}); // add filter + orderby post demo
Endpoint.api.transactionsBrowse({fromTimestamp: '<timestamp>', nodeName: '<nodeName>'}); // add filter + orderby post demo

// DETAILS APIs
// System
/*post demo
Endpoint.api.systemSystem({fromTimestamp: '<timestamp>', nodeName: '<nodeName>', resourceStat: 'cpu', filter: '<filter>', granularity: '15m'});
Endpoint.api.systemSystem({fromTimestamp: '<timestamp>', nodeName: '<nodeName>', resourceStat: 'memory', filter: '<filter>', granularity: '15m'});
// Queues
Endpoint.api.queuesQueues({fromTimestamp: '<timestamp>', nodeName: '<nodeName>', resourceStat: 'aggr', filter: '<filter>', granularity: '15m'});
Endpoint.api.queuesQueues({fromTimestamp: '<timestamp>', nodeName: '<nodeName>', resourceStat: 'recv', filter: '<filter>', granularity: '15m'});
Endpoint.api.queuesQueues({fromTimestamp: '<timestamp>', nodeName: '<nodeName>', resourceStat: 'pers', filter: '<filter>', granularity: '15m'});
Endpoint.api.queuesQueues({fromTimestamp: '<timestamp>', nodeName: '<nodeName>', resourceStat: 'npers', filter: '<filter>', granularity: '15m'});
Endpoint.api.queuesQueues({fromTimestamp: '<timestamp>', nodeName: '<nodeName>', resourceStat: 'log', filter: '<filter>', granularity: '15m'});
post demo */
// Flows
Endpoint.api.flowsFlows({fromTimestamp: '<timestamp>', nodeName: '<nodeName>', resourceStat: 'latency,pktdrop,macmove', filter: 'srcIp:<srcIp> AND srcPort:<srcPort> AND dstIp:<dstIp> AND dstPort:<dstPort> AND protocol:<protocol> AND ingressVrf:<ingressVrf>', granularity: '15m'});
Endpoint.api.transactionsTransactions();
console.groupEnd();
```
