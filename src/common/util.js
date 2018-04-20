import constants from '../constants';

let getNameByDn = function(dn, order = 0) {
    if (!dn) {
        return undefined;
    }
    let arr = dn.split('/');
    if (arr.length === 1) {
        return arr[0];
    }
    if (arr.length <= order) {
        return undefined;
    }
    return arr[arr.length - 1 - order].split('-')[1];
};

export default {
    emptyFn: function() {},
    getNameByDn: getNameByDn,
    //TODO:remove
    getDemoUrl: function(key) {
        let option;
        for (let i = 0; i < constants.DEMO_TYPE_AHEAD_OPTIONS.length; i++) {
            option = constants.DEMO_TYPE_AHEAD_OPTIONS[i];
            if (option.key === key) {
                return option.url;
            }
        }
        return false;
    }
};
