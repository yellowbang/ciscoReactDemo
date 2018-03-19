# Mock data configurations

`config` folder contains configurations files for mock data responses.

* `stats.properties[propertyName].values` Array of values to be appended to the generated stats for a specific property name.
This can be empty or of an arbitrary size. If the number of stats samples returned for the request is lower than values length,
the remaining samples will be generated according to fakerOpts.

* `stats.properties[propertyName].fakerOpts` {Object} Specific configuration to be passed to Faker.js to generate a specific property.

* Configuration file example
```
const configuration = {
    nodes: [
        {
            nodeName: 'custom-node-1',
            description: 'custom-node-1 description',
            stats: {
                properties: {
                    /**
                     * Use 10, 20, 80 as values for the first 3 stats samples for cpu_usage
                     * generate the remaining values in a range between 25 and 55.
                     * e.g. result => [
                     *      {timestamp: '...', cpu_usage: 10, ...}
                     *      {timestamp: '...', cpu_usage: 20, ...}
                     *      {timestamp: '...', cpu_usage: 80, ...}
                     *      {timestamp: '...', cpu_usage: 30, ...}
                     *      {timestamp: '...', cpu_usage: 54, ...}
                     * ]
                     */
                    cpu_usage: {
                        values: [10, 20, 80],
                        fakerOpts: {
                            minimum: 25,
                            maximum: 55
                        }
                    },
                    mem_used: {
                        values: [],
                        fakerOpts: {
                            minimum: 8000,
                            maximum: 8000
                        }
                    },
                    mtsq_total: {
                        values: [],
                        fakerOpts: {
                            minimum: 1000,
                            maximum: 1500
                        }
                    },
                    pktdrop: {
                        values: [],
                        fakerOpts: {
                            minimum: 2000,
                            maximum: 3000
                        }
                    },
                    latency: {
                        values: [],
                        fakerOpts: {
                            minimum: 10,
                            maximum: 16
                        }
                    },
                    epmove: {
                        values: [],
                        fakerOpts: {
                            minimum: 10,
                            maximum: 16
                        }
                    }
                }
            }
        },
        {
            nodeName: 'custom-node-2',
            description: 'custom-node-2 description',
            stats: {
                properties: {
                    cpu_usage: {
                        values: [80, 80, 70, 50, 50],
                        fakerOpts: {
                            minimum: 10,
                            maximum: 20
                        }
                    }
                }
            }
        },
        ...
    ]
};

module.exports = configuration;
