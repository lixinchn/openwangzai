function parseStringToEnum(str, enums, errorInfo = '') {
    let eType = enums[str];
    if (!eType) {
        // TODO: raise an exception
    }
    return eType;
}


module.exports = {
    parseStringToEnum
};
