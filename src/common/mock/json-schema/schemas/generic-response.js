const genericResponse = {
    id: 'genericResponse',
    type: 'object',
    properties: {
        entries: {
            type: 'array',
            items: {}
        }
    },
    required: ['entries']
};

export {genericResponse};
