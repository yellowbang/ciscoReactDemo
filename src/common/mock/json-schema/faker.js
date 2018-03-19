import _ from 'lodash';
const jsf = require('json-schema-faker');
let faker = require('faker');

jsf.extend('faker', () => {
    faker.custom = {
        epg: function() {
            return faker.random.arrayElement([
                faker.custom.processName(),
                'microservices',
                'nginx',
                'mongodb'
            ]);
        },
        eth: function(opts = {}) {
            return `eth${faker.random.number(_.merge({min: 1, max: 128}, opts))}`;
        },
        nodeName: function(opts = {}) {
            return `${faker.random.arrayElement(['switch', 'spine', 'leaf'])}-${faker.random.number(_.merge({min: 1, max: 1000}, opts))}`;
        },
        flowId: function() {
            return `${faker.custom.ipAddress()}:${faker.custom.port()}`;
        },
        flowType: function() {
            return faker.random.arrayElement(['IPV4', 'IPV6']);
        },
        flowPath: function() {
            let path = [];
            let min = 2;
            let max = 5;

            for (let i = 0, j = faker.random.number({min: min, max: max}); i <= j; i++) {
                path.push({
                    egressPif: [faker.custom.eth()],
                    ingressVif: [faker.custom.eth()],
                    node: faker.custom.nodeName()
                });
            }
            return [path];
        },
        processName: function(opts = {}) {
            return `Process ${faker.random.number(_.merge({min: 1}, opts))}`;
        },
        sapName: function(opts = {}) {
            return `SAP ${faker.random.number(_.merge({min: 1}, opts))}`;
        },
        percentage: function(opts = {}) {
            return faker.random.number(_.merge({min: 0, max: 100}, opts));
        },
        float: function() {
            return faker.finance.amount(1, 10000, 1);
        },
        ipAddress: function() {
            return faker.internet.ip();
        },
        port: function(opts = {}) {
            return faker.random.number(_.merge({min: 0, max: 65535}, opts));
        },
        prefixedName: function(prefix) {
            return `${prefix}-${faker.random.number({min: 0, max: 1000})}`;
        },
        protocolName: function() {
            return faker.random.arrayElement(['TCP']);
        }
    };
    return faker;
});


export {jsf, faker};

