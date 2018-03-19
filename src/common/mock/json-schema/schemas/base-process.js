import {properties} from '../properties';

const baseProcess = {
    id: 'baseProcess',
    type: 'object',
    properties: {
        processName: properties.processName
    },
    required: [properties.processName.id]
};
export {baseProcess};
