const configuration = {
    nodes: [
        {
            nodeName: 'custom-node-1',
            description: 'custom-node-1 description',
            stats: {
                properties: {
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
        }
    ]
};

module.exports = configuration;
