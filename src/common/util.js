let getNameByDn = function(dn, order = 0) {
    let arr = dn.split('/');
    return arr[arr.length - 1 - order].split('-')[1];
};

export default {
    getNameByDn: getNameByDn
};
