import {properties} from '../properties';

const baseFlow = {
    id: 'baseFlow',
    type: 'object',
    properties: {
        flowId: properties.flowId
    },
    required: [properties.flowId.id]
};
export {baseFlow};
