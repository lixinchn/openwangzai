function parseStringToEnum(str, enum, errorInfo = '') {
    let eType = enum[str];
    if (!eType) {
        // TODO: raise an exception
    }
    return eType;
}


module.exports = {
    'parseStringToEnum': parseStringToEnum,
};
