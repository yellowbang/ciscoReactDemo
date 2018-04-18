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
    emptyFn: function(){},
    getNameByDn: getNameByDn
};
