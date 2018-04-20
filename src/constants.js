const appId = 'p42Id';
export default {
    APP_ID: appId,
    INIT_TYPE_AHEAD_OPTIONS: [
        {key: 'What EPGs are associated with'},
        {key: 'What EPs are associated with'},
        {key: 'What VRFs are associated with'},
        {key: 'What BDs are associated with'},
        {key: 'What ENCAPs are associated with'},
        {key: 'What INFs are associated with'},
        {key: 'What INSTPs are associated with'},
        {key: 'What LEAFs are associated with'},
        {key: 'Can EPG:epg51 talk to EPG:epg61'},
        {key: 'Can EPG:epg51 talk to EPG:epg52'}
    ],
    MOCK_SERVER_URL: 'http://172.31.219.91:5000/',
    MOCK_DATA_EPG: {
        'associated_to_str': '',
        'eps': [
            '173.36.1.102/32',
            '173.36.3.102/32',
            '173.36.2.101/32',
            '173.36.8.102/32',
            '173.36.55.102/32',
            '173.36.5.101/32',
            '173.36.9.102/32',
            '173.36.58.101/32',
            '173.36.62.101/32',
            '173.36.53.102/32',
            'Unknownep54/32',
            '173.36.8.101/32',
            '173.36.60.101/32',
            '173.36.51.102/32',
            '173.36.1.101/32',
            '173.36.5.102/32',
            '173.36.57.101/32',
            '173.36.4.101/32',
            '173.36.57.102/32',
            'Unknownep51/32',
            '173.36.53.101/32',
            '173.36.51.101/32',
            'Unknownep2/32',
            '173.36.52.102/32',
            '173.36.56.101/32',
            '173.36.61.102/32',
            'Unknownep53/32',
            '173.36.7.102/32',
            '173.36.61.101/32',
            '173.36.3.101/32',
            '173.36.54.102/32',
            '173.36.56.102/32',
            '173.36.58.102/32',
            '173.36.54.101/32',
            '173.36.52.101/32',
            '173.36.10.101/32',
            'Unknownep3/32',
            'Unknownep1/32',
            '173.36.11.102/32',
            'Unknownep4/32',
            '173.36.55.101/32',
            '173.36.11.101/32',
            '173.36.10.102/32',
            '173.36.12.102/32',
            '173.36.60.102/32',
            '173.36.59.102/32',
            '173.36.6.102/32',
            'Unknownep52/32',
            '173.36.7.101/32',
            '173.36.4.102/32',
            '173.36.12.101/32',
            '173.36.2.102/32',
            '173.36.6.101/32',
            '173.36.9.101/32',
            '173.36.59.101/32',
            '173.36.62.102/32'
        ],
        'eps_cnt': 56,
        'model': 'demo',
        'response': {
            'tiles': {
                'count': 24,
                'data': {
                    'uni/tn-dmz/ap-1hop/epg-epg1': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-dmz/BD-dmz'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.1.102/32',
                                '173.36.1.101/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-dmz/ap-1hop/epg-epg1'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-dmz-1hop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-dmz/ctx-dmz'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-dmz/ap-1hop/epg-epg2': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-dmz/BD-dmz'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.2.102/32',
                                '173.36.2.101/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-dmz/ap-1hop/epg-epg2'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-dmz-1hop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-dmz/ctx-dmz'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-dmz/ap-1hop/epg-epg3': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-dmz/BD-dmz'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.3.101/32',
                                '173.36.3.102/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-dmz/ap-1hop/epg-epg3'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-dmz-1hop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-dmz/ctx-dmz'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-dmz/ap-multi_hop/epg-epg51': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-dmz/BD-dmz'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.51.102/32',
                                '173.36.51.101/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-dmz/ap-multi_hop/epg-epg51'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-dmz-multihop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-dmz/ctx-dmz'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-dmz/ap-multi_hop/epg-epg52': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-dmz/BD-dmz'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.52.102/32',
                                '173.36.52.101/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-dmz/ap-multi_hop/epg-epg52'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-dmz-multihop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-dmz/ctx-dmz'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-dmz/ap-multi_hop/epg-epg53': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-dmz/BD-dmz'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.53.101/32',
                                '173.36.53.102/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-dmz/ap-multi_hop/epg-epg53'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-dmz-multihop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-dmz/ctx-dmz'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-internal/ap-1hop/epg-epg4': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/BD-internal'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.4.102/32',
                                '173.36.4.101/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ap-1hop/epg-epg4'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-internal-1hop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ctx-internal'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-internal/ap-1hop/epg-epg5': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/BD-internal'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.5.101/32',
                                '173.36.5.102/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ap-1hop/epg-epg5'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-internal-1hop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ctx-internal'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-internal/ap-1hop/epg-epg6': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/BD-internal'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.6.101/32',
                                '173.36.6.102/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ap-1hop/epg-epg6'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-internal-1hop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ctx-internal'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-internal/ap-1hop/epg-epg7': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/BD-internal'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.7.101/32',
                                '173.36.7.102/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ap-1hop/epg-epg7'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-internal-1hop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ctx-internal'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-internal/ap-1hop/epg-epg8': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/BD-internal'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.8.102/32',
                                '173.36.8.101/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ap-1hop/epg-epg8'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-internal-1hop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ctx-internal'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-internal/ap-1hop/epg-epg9': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/BD-internal'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.9.102/32',
                                '173.36.9.101/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ap-1hop/epg-epg9'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-internal-1hop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ctx-internal'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-internal/ap-multi_hop/epg-epg54': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/BD-internal'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.54.102/32',
                                '173.36.54.101/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ap-multi_hop/epg-epg54'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-internal-multihop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ctx-internal'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-internal/ap-multi_hop/epg-epg55': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/BD-internal'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.55.101/32',
                                '173.36.55.102/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ap-multi_hop/epg-epg55'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-internal-multihop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ctx-internal'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-internal/ap-multi_hop/epg-epg56': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/BD-internal'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.56.101/32',
                                '173.36.56.102/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ap-multi_hop/epg-epg56'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-internal-multihop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ctx-internal'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-internal/ap-multi_hop/epg-epg57': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/BD-internal'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.57.101/32',
                                '173.36.57.102/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ap-multi_hop/epg-epg57'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-internal-multihop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ctx-internal'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-internal/ap-multi_hop/epg-epg58': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/BD-internal'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.58.102/32',
                                '173.36.58.101/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ap-multi_hop/epg-epg58'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-internal-multihop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ctx-internal'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-internal/ap-multi_hop/epg-epg59': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/BD-internal'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.59.102/32',
                                '173.36.59.101/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ap-multi_hop/epg-epg59'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-internal-multihop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ctx-internal'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-secured/ap-1hop/epg-epg10': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-secured/BD-secured'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.10.102/32',
                                '173.36.10.101/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-secured/ap-1hop/epg-epg10'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-secured-1hop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-secured/ctx-secured'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-secured/ap-1hop/epg-epg11': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-secured/BD-secured'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.11.101/32',
                                '173.36.11.102/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-secured/ap-1hop/epg-epg11'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-secured-1hop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-secured/ctx-secured'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-secured/ap-1hop/epg-epg12': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-secured/BD-secured'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.12.101/32',
                                '173.36.12.102/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-secured/ap-1hop/epg-epg12'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-secured-1hop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-secured/ctx-secured'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-secured/ap-multi_hop/epg-epg60': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-secured/BD-secured'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.60.102/32',
                                '173.36.60.101/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-secured/ap-multi_hop/epg-epg60'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-secured-multihop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-secured/ctx-secured'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-secured/ap-multi_hop/epg-epg61': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-secured/BD-secured'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.61.102/32',
                                '173.36.61.101/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-secured/ap-multi_hop/epg-epg61'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-secured-multihop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-secured/ctx-secured'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    },
                    'uni/tn-secured/ap-multi_hop/epg-epg62': {
                        'N_BD': {
                            'count': 1,
                            'data': [
                                'uni/tn-secured/BD-secured'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 2,
                            'data': [
                                '173.36.62.101/32',
                                '173.36.62.102/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 1,
                            'data': [
                                'uni/tn-secured/ap-multi_hop/epg-epg62'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 0,
                            'data': []
                        },
                        'N_LEAF': {
                            'count': 1,
                            'data': [
                                'node-secured-multihop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-secured/ctx-secured'
                            ]
                        },
                        'tile_type': 'N_EPG'
                    }
                }
            }
        },
        'start_time': '2018-04-17 10:52:43.021424',
        'status': 'QS_OK',
        'tile_type': 'N_EPG',
        'total_time': '0:00:00.012203',
        'type': 'QT_WHAT'
    },
    MOCK_DATA_VRF: {
        'associated_to_str': '',
        'eps': [
            '173.36.1.102/32',
            '173.36.3.102/32',
            '173.36.2.101/32',
            '173.36.8.102/32',
            '173.36.55.102/32',
            '173.36.5.101/32',
            '173.36.9.102/32',
            '173.36.58.101/32',
            '173.36.62.101/32',
            '173.36.53.102/32',
            'Unknownep54/32',
            '173.36.8.101/32',
            '173.36.60.101/32',
            '173.36.51.102/32',
            '173.36.1.101/32',
            '173.36.5.102/32',
            '173.36.57.101/32',
            '173.36.4.101/32',
            '173.36.57.102/32',
            'Unknownep51/32',
            '173.36.53.101/32',
            '173.36.51.101/32',
            'Unknownep2/32',
            '173.36.52.102/32',
            '173.36.56.101/32',
            '173.36.61.102/32',
            'Unknownep53/32',
            '173.36.7.102/32',
            '173.36.61.101/32',
            '173.36.3.101/32',
            '173.36.54.102/32',
            '173.36.56.102/32',
            '173.36.58.102/32',
            '173.36.54.101/32',
            '173.36.52.101/32',
            '173.36.10.101/32',
            'Unknownep3/32',
            'Unknownep1/32',
            '173.36.11.102/32',
            'Unknownep4/32',
            '173.36.55.101/32',
            '173.36.11.101/32',
            '173.36.10.102/32',
            '173.36.12.102/32',
            '173.36.60.102/32',
            '173.36.59.102/32',
            '173.36.6.102/32',
            'Unknownep52/32',
            '173.36.7.101/32',
            '173.36.4.102/32',
            '173.36.12.101/32',
            '173.36.2.102/32',
            '173.36.6.101/32',
            '173.36.9.101/32',
            '173.36.59.101/32',
            '173.36.62.102/32'
        ],
        'eps_cnt': 56,
        'model': 'demo',
        'response': {
            'tiles': {
                'count': 3,
                'data': {
                    'uni/tn-dmz/ctx-dmz': {
                        'N_BD': {
                            'count': 2,
                            'data': [
                                'uni/tn-dmz/BD-Unknowndmz',
                                'uni/tn-dmz/BD-dmz'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 14,
                            'data': [
                                '173.36.1.102/32',
                                '173.36.3.102/32',
                                '173.36.53.101/32',
                                '173.36.2.101/32',
                                '173.36.51.101/32',
                                '173.36.52.102/32',
                                'Unknownep1/32',
                                '173.36.53.102/32',
                                '173.36.51.102/32',
                                '173.36.1.101/32',
                                '173.36.52.101/32',
                                '173.36.2.102/32',
                                '173.36.3.101/32',
                                'Unknownep51/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 6,
                            'data': [
                                'uni/tn-dmz/ap-1hop/epg-epg3',
                                'uni/tn-dmz/ap-1hop/epg-epg2',
                                'uni/tn-dmz/ap-1hop/epg-epg1',
                                'uni/tn-dmz/ap-multi_hop/epg-epg53',
                                'uni/tn-dmz/ap-multi_hop/epg-epg52',
                                'uni/tn-dmz/ap-multi_hop/epg-epg51'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 2,
                            'data': [
                                'uni/tn-dmz/out-1hop_l3out/instP-1hop_out-extNet',
                                'uni/tn-dmz/out-multi_hop_l3out/instP-multi_hop_out-extNet'
                            ]
                        },
                        'N_LEAF': {
                            'count': 4,
                            'data': [
                                'node-dmz-1hop',
                                'node151',
                                'node101',
                                'node-dmz-multihop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-dmz/ctx-dmz'
                            ]
                        },
                        'tile_type': 'N_VRF'
                    },
                    'uni/tn-internal/ctx-internal': {
                        'N_BD': {
                            'count': 2,
                            'data': [
                                'uni/tn-internal/BD-Unknowninternal',
                                'uni/tn-internal/BD-internal'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 28,
                            'data': [
                                '173.36.8.102/32',
                                '173.36.55.102/32',
                                '173.36.5.101/32',
                                '173.36.9.102/32',
                                '173.36.8.101/32',
                                '173.36.5.102/32',
                                '173.36.57.101/32',
                                '173.36.4.101/32',
                                '173.36.57.102/32',
                                'Unknownep2/32',
                                '173.36.56.101/32',
                                'Unknownep53/32',
                                '173.36.7.102/32',
                                '173.36.55.101/32',
                                '173.36.54.102/32',
                                '173.36.56.102/32',
                                '173.36.58.102/32',
                                '173.36.54.101/32',
                                'Unknownep3/32',
                                '173.36.58.101/32',
                                'Unknownep52/32',
                                '173.36.59.102/32',
                                '173.36.6.102/32',
                                '173.36.7.101/32',
                                '173.36.4.102/32',
                                '173.36.6.101/32',
                                '173.36.9.101/32',
                                '173.36.59.101/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 12,
                            'data': [
                                'uni/tn-internal/ap-multi_hop/epg-epg58',
                                'uni/tn-internal/ap-multi_hop/epg-epg59',
                                'uni/tn-internal/ap-multi_hop/epg-epg56',
                                'uni/tn-internal/ap-multi_hop/epg-epg57',
                                'uni/tn-internal/ap-multi_hop/epg-epg54',
                                'uni/tn-internal/ap-multi_hop/epg-epg55',
                                'uni/tn-internal/ap-1hop/epg-epg6',
                                'uni/tn-internal/ap-1hop/epg-epg7',
                                'uni/tn-internal/ap-1hop/epg-epg4',
                                'uni/tn-internal/ap-1hop/epg-epg5',
                                'uni/tn-internal/ap-1hop/epg-epg8',
                                'uni/tn-internal/ap-1hop/epg-epg9'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 4,
                            'data': [
                                'uni/tn-internal/out-1hop_l3out/instP-1hop_out-extNet',
                                'uni/tn-internal/out-multi_hop_l3out/instP-multi_hop_in-extNet',
                                'uni/tn-internal/out-1hop_l3out/instP-1hop_in-extNet',
                                'uni/tn-internal/out-multi_hop_l3out/instP-multi_hop_out-extNet'
                            ]
                        },
                        'N_LEAF': {
                            'count': 6,
                            'data': [
                                'node102',
                                'node103',
                                'node153',
                                'node-internal-1hop',
                                'node-internal-multihop',
                                'node152'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-internal/ctx-internal'
                            ]
                        },
                        'tile_type': 'N_VRF'
                    },
                    'uni/tn-secured/ctx-secured': {
                        'N_BD': {
                            'count': 2,
                            'data': [
                                'uni/tn-secured/BD-Unknownsecured',
                                'uni/tn-secured/BD-secured'
                            ]
                        },
                        'N_ENCAP': {
                            'count': 0,
                            'data': []
                        },
                        'N_EP': {
                            'count': 14,
                            'data': [
                                '173.36.11.101/32',
                                '173.36.10.102/32',
                                '173.36.12.102/32',
                                '173.36.62.101/32',
                                '173.36.10.101/32',
                                '173.36.60.101/32',
                                '173.36.11.102/32',
                                '173.36.61.102/32',
                                '173.36.12.101/32',
                                'Unknownep54/32',
                                '173.36.62.102/32',
                                '173.36.61.101/32',
                                '173.36.60.102/32',
                                'Unknownep4/32'
                            ]
                        },
                        'N_EPG': {
                            'count': 6,
                            'data': [
                                'uni/tn-secured/ap-1hop/epg-epg12',
                                'uni/tn-secured/ap-1hop/epg-epg11',
                                'uni/tn-secured/ap-1hop/epg-epg10',
                                'uni/tn-secured/ap-multi_hop/epg-epg62',
                                'uni/tn-secured/ap-multi_hop/epg-epg60',
                                'uni/tn-secured/ap-multi_hop/epg-epg61'
                            ]
                        },
                        'N_INF': {
                            'count': 0,
                            'data': []
                        },
                        'N_INSTP': {
                            'count': 2,
                            'data': [
                                'uni/tn-secured/out-multi_hop_l3out/instP-multi_hop_in-extNet',
                                'uni/tn-secured/out-1hop_l3out/instP-1hop_in-extNet'
                            ]
                        },
                        'N_LEAF': {
                            'count': 4,
                            'data': [
                                'node-secured-1hop',
                                'node104',
                                'node154',
                                'node-secured-multihop'
                            ]
                        },
                        'N_VRF': {
                            'count': 1,
                            'data': [
                                'uni/tn-secured/ctx-secured'
                            ]
                        },
                        'tile_type': 'N_VRF'
                    }
                }
            }
        },
        'start_time': '2018-04-17 10:41:35.410313',
        'status': 'QS_OK',
        'tile_type': 'N_VRF',
        'total_time': '0:00:00.012276',
        'type': 'QT_WHAT'
    },
    MOCK_HOW_THEY_TALK: {
        'from_epg_name': 'uni/tn-dmz/ap-multi_hop/epg-epg51',
        'from_str': 'epg51',
        'model': 'demo',
        'response': {
            'dest': 'uni/tn-secured/ap-multi_hop/epg-epg61',
            'flows': {
                'hop0': {
                    'count': 1,
                    'data': [
                        {
                            'action': 'permit',
                            'd_ctx': 'uni/tn-dmz/ctx-dmz',
                            'dp': 'any',
                            'fw': 'nfw',
                            'prot': 'tcp',
                            's_ctx': 'uni/tn-dmz/ctx-dmz',
                            'sp': 'any'
                        }
                    ]
                },
                'hop1': {
                    'count': 1,
                    'data': [
                        {
                            'action': 'permit',
                            'd_ctx': 'uni/tn-dmz/ctx-dmz',
                            'dp': 'any',
                            'fw': 'nfw',
                            'prot': 'tcp',
                            's_ctx': 'uni/tn-dmz/ctx-dmz',
                            'sp': 'any'
                        },
                        {
                            'action': 'permit',
                            'd_ctx': 'uni/tn-internal/ctx-internal',
                            'dp': 'any',
                            'fw': 'nfw',
                            'prot': 'tcp',
                            's_ctx': 'uni/tn-dmz/ctx-dmz',
                            'sp': 'any'
                        }
                    ]
                },
                'hop2': {
                    'count': 1,
                    'data': [
                        {
                            'action': 'permit',
                            'd_ctx': 'uni/tn-dmz/ctx-dmz',
                            'dp': 'any',
                            'fw': 'nfw',
                            'prot': 'tcp',
                            's_ctx': 'uni/tn-dmz/ctx-dmz',
                            'sp': 'any'
                        },
                        {
                            'action': 'permit',
                            'd_ctx': 'uni/tn-internal/ctx-internal',
                            'dp': 'any',
                            'fw': 'nfw',
                            'prot': 'tcp',
                            's_ctx': 'uni/tn-dmz/ctx-dmz',
                            'sp': 'any'
                        },
                        {
                            'action': 'permit',
                            'd_ctx': 'uni/tn-internal/ctx-internal',
                            'dp': 'any',
                            'fw': 'nfw',
                            'prot': 'tcp',
                            's_ctx': 'uni/tn-dmz/ctx-dmz',
                            'sp': 'any'
                        }
                    ]
                },
                'hop3': {
                    'count': 1,
                    'data': [
                        {
                            'action': 'permit',
                            'd_ctx': 'uni/tn-dmz/ctx-dmz',
                            'dp': 'any',
                            'fw': 'nfw',
                            'prot': 'tcp',
                            's_ctx': 'uni/tn-dmz/ctx-dmz',
                            'sp': 'any'
                        },
                        {
                            'action': 'permit',
                            'd_ctx': 'uni/tn-internal/ctx-internal',
                            'dp': 'any',
                            'fw': 'nfw',
                            'prot': 'tcp',
                            's_ctx': 'uni/tn-dmz/ctx-dmz',
                            'sp': 'any'
                        },
                        {
                            'action': 'permit',
                            'd_ctx': 'uni/tn-internal/ctx-internal',
                            'dp': 'any',
                            'fw': 'nfw',
                            'prot': 'tcp',
                            's_ctx': 'uni/tn-dmz/ctx-dmz',
                            'sp': 'any'
                        },
                        {
                            'action': 'permit',
                            'd_ctx': 'uni/tn-secured/ctx-secured',
                            'dp': 'any',
                            'fw': 'nfw',
                            'prot': 'tcp',
                            's_ctx': 'uni/tn-internal/ctx-internal',
                            'sp': 'any'
                        },
                        {
                            'action': 'permit',
                            'd_ctx': 'uni/tn-internal/ctx-internal',
                            'dp': 'any',
                            'fw': 'nfw',
                            'prot': 'tcp',
                            's_ctx': 'uni/tn-dmz/ctx-dmz',
                            'sp': 'any'
                        },
                        {
                            'action': 'permit',
                            'd_ctx': 'uni/tn-secured/ctx-secured',
                            'dp': 'any',
                            'fw': 'nfw',
                            'prot': 'tcp',
                            's_ctx': 'uni/tn-internal/ctx-internal',
                            'sp': 'any'
                        },
                        {
                            'action': 'permit',
                            'd_ctx': 'uni/tn-internal/ctx-internal',
                            'dp': 'any',
                            'fw': 'nfw',
                            'prot': 'tcp',
                            's_ctx': 'uni/tn-dmz/ctx-dmz',
                            'sp': 'any'
                        },
                        {
                            'action': 'permit',
                            'd_ctx': 'uni/tn-secured/ctx-secured',
                            'dp': 'any',
                            'fw': 'nfw',
                            'prot': 'tcp',
                            's_ctx': 'uni/tn-internal/ctx-internal',
                            'sp': 'any'
                        }
                    ]
                },
                'hop4': {
                    'count': 1,
                    'data': [
                        {
                            'action': 'permit',
                            'd_ctx': 'uni/tn-secured/ctx-secured',
                            'dp': '161-161',
                            'fw': 'nfw',
                            'prot': 'tcp',
                            's_ctx': 'uni/tn-secured/ctx-secured',
                            'sp': 'any'
                        }
                    ]
                }
            },
            'path': [
                'uni/tn-dmz/ap-multi_hop/epg-epg51',
                'uni/tn-dmz/out-multi_hop_l3out/instP-multi_hop_out-extNet',
                'uni/tn-internal/out-multi_hop_l3out/instP-multi_hop_in-extNet',
                'uni/tn-internal/out-multi_hop_l3out/instP-multi_hop_out-extNet',
                'uni/tn-secured/out-multi_hop_l3out/instP-multi_hop_in-extNet',
                'uni/tn-secured/ap-multi_hop/epg-epg61'
            ],
            'path_length': 6,
            'src': 'uni/tn-dmz/ap-multi_hop/epg-epg51'
        },
        'start_time': '2018-04-10 17:27:03.390350',
        'status': 'QS_OK',
        'through_condition_map': {
            'dp_from': '161',
            'dp_to': '161',
            'prot': 'tcp',
            'sp_from': 65535,
            'sp_to': 0
        },
        'through_str': 'dp_from:161 dp_to:161',
        'to_epg_name': 'uni/tn-secured/ap-multi_hop/epg-epg61',
        'to_str': 'epg61',
        'total_time': '0:00:00.049594',
        'type': 'QT_HOW'
    },
    MOCK_CHORD_DATA: {
        'filter_name_set': [],
        'filter_str': '',
        'from_name_set': [
            'uni/tn-dmz/ap-1hop/epg-epg3',
            'uni/tn-dmz/ap-1hop/epg-epg2',
            'uni/tn-dmz/ap-1hop/epg-epg1',
            'uni/tn-dmz/ap-multi_hop/epg-epg53',
            'uni/tn-dmz/ap-multi_hop/epg-epg52',
            'uni/tn-dmz/ap-multi_hop/epg-epg51',
            'uni/tn-dmz/out-multi_hop_l3out/instP-multi_hop_out-extNet',
            'uni/tn-dmz/out-1hop_l3out/instP-1hop_out-extNet'
        ],
        'from_str': 'dmz',
        'model': 'demo',
        'pivot_name_set': [],
        'pivot_str': '',
        'response': {
            'step1': {
                'from': [
                    'uni/tn-dmz/ap-1hop/epg-epg3',
                    'uni/tn-dmz/ap-1hop/epg-epg2',
                    'uni/tn-dmz/ap-1hop/epg-epg1',
                    'uni/tn-dmz/ap-multi_hop/epg-epg53',
                    'uni/tn-dmz/ap-multi_hop/epg-epg52',
                    'uni/tn-dmz/ap-multi_hop/epg-epg51',
                    'uni/tn-dmz/out-multi_hop_l3out/instP-multi_hop_out-extNet',
                    'uni/tn-dmz/out-1hop_l3out/instP-1hop_out-extNet'
                ],
                'from_cnt': 8,
                'reachability': {
                    'from_connected': [
                        'uni/tn-dmz/out-multi_hop_l3out/instP-multi_hop_out-extNet',
                        'uni/tn-dmz/ap-multi_hop/epg-epg53',
                        'uni/tn-dmz/ap-multi_hop/epg-epg52',
                        'uni/tn-dmz/ap-multi_hop/epg-epg51'
                    ],
                    'from_connected_cnt': 4,
                    'reachable': true,
                    'to_connected': [
                        'uni/tn-secured/out-multi_hop_l3out/instP-multi_hop_in-extNet',
                        'uni/tn-secured/ap-multi_hop/epg-epg62',
                        'uni/tn-secured/ap-multi_hop/epg-epg60',
                        'uni/tn-secured/ap-multi_hop/epg-epg61'
                    ],
                    'to_connected_cnt': 4,
                    'uni/tn-dmz/ap-1hop/epg-epg1': {
                        'from': 'uni/tn-dmz/ap-1hop/epg-epg1',
                        'to': []
                    },
                    'uni/tn-dmz/ap-1hop/epg-epg2': {
                        'from': 'uni/tn-dmz/ap-1hop/epg-epg2',
                        'to': []
                    },
                    'uni/tn-dmz/ap-1hop/epg-epg3': {
                        'from': 'uni/tn-dmz/ap-1hop/epg-epg3',
                        'to': []
                    },
                    'uni/tn-dmz/ap-multi_hop/epg-epg51': {
                        'from': 'uni/tn-dmz/ap-multi_hop/epg-epg51',
                        'to': [
                            'uni/tn-secured/out-multi_hop_l3out/instP-multi_hop_in-extNet',
                            'uni/tn-secured/ap-multi_hop/epg-epg62',
                            'uni/tn-secured/ap-multi_hop/epg-epg60',
                            'uni/tn-secured/ap-multi_hop/epg-epg61'
                        ]
                    },
                    'uni/tn-dmz/ap-multi_hop/epg-epg52': {
                        'from': 'uni/tn-dmz/ap-multi_hop/epg-epg52',
                        'to': [
                            'uni/tn-secured/out-multi_hop_l3out/instP-multi_hop_in-extNet',
                            'uni/tn-secured/ap-multi_hop/epg-epg62',
                            'uni/tn-secured/ap-multi_hop/epg-epg60',
                            'uni/tn-secured/ap-multi_hop/epg-epg61'
                        ]
                    },
                    'uni/tn-dmz/ap-multi_hop/epg-epg53': {
                        'from': 'uni/tn-dmz/ap-multi_hop/epg-epg53',
                        'to': [
                            'uni/tn-secured/out-multi_hop_l3out/instP-multi_hop_in-extNet',
                            'uni/tn-secured/ap-multi_hop/epg-epg62',
                            'uni/tn-secured/ap-multi_hop/epg-epg60',
                            'uni/tn-secured/ap-multi_hop/epg-epg61'
                        ]
                    },
                    'uni/tn-dmz/out-1hop_l3out/instP-1hop_out-extNet': {
                        'from': 'uni/tn-dmz/out-1hop_l3out/instP-1hop_out-extNet',
                        'to': []
                    },
                    'uni/tn-dmz/out-multi_hop_l3out/instP-multi_hop_out-extNet': {
                        'from': 'uni/tn-dmz/out-multi_hop_l3out/instP-multi_hop_out-extNet',
                        'to': [
                            'uni/tn-secured/out-multi_hop_l3out/instP-multi_hop_in-extNet',
                            'uni/tn-secured/ap-multi_hop/epg-epg62',
                            'uni/tn-secured/ap-multi_hop/epg-epg60',
                            'uni/tn-secured/ap-multi_hop/epg-epg61'
                        ]
                    }
                },
                'to': [
                    'uni/tn-secured/out-multi_hop_l3out/instP-multi_hop_in-extNet',
                    'uni/tn-secured/ap-1hop/epg-epg12',
                    'uni/tn-secured/ap-1hop/epg-epg11',
                    'uni/tn-secured/ap-1hop/epg-epg10',
                    'uni/tn-secured/out-1hop_l3out/instP-1hop_in-extNet',
                    'uni/tn-secured/ap-multi_hop/epg-epg62',
                    'uni/tn-secured/ap-multi_hop/epg-epg60',
                    'uni/tn-secured/ap-multi_hop/epg-epg61'
                ],
                'to_cnt': 8
            }
        },
        'start_time': '2018-04-16 11:41:39.237972',
        'status': 'QS_OK',
        'through_condition_map': {
            'dp_from': 65535,
            'dp_to': 0,
            'prot': 'tcp',
            'sp_from': 65535,
            'sp_to': 0
        },
        'through_str': '',
        'to_name_set': [
            'uni/tn-secured/out-multi_hop_l3out/instP-multi_hop_in-extNet',
            'uni/tn-secured/ap-1hop/epg-epg12',
            'uni/tn-secured/ap-1hop/epg-epg11',
            'uni/tn-secured/ap-1hop/epg-epg10',
            'uni/tn-secured/out-1hop_l3out/instP-1hop_in-extNet',
            'uni/tn-secured/ap-multi_hop/epg-epg62',
            'uni/tn-secured/ap-multi_hop/epg-epg60',
            'uni/tn-secured/ap-multi_hop/epg-epg61'
        ],
        'to_str': 'uni/tn-secured',
        'total_time': '0:00:00.050829',
        'type': 'QT_WHICH'
    }
};
