let getNameByDn = function(dn, order = 0) {
    let arr = dn.split('/');
    if (arr.length <= order) {
        return undefined;
    }
    return arr[arr.length - 1 - order].split('-')[1];
};

export default {
    emptyFn: function(){},
    getNameByDn: getNameByDn
};
