import {properties} from '../properties';

const baseNode = {
    id: 'baseNode',
    type: 'object',
    properties: {
        nodeName: properties.nodeName,
        description: properties.description
    },
    required: [properties.nodeName.id, properties.description.id]
};
export {baseNode};
