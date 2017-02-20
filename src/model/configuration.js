import {parseStringToEnum} from '../util/model_util';


export default class Configuration {
    constructor(strEndpoint) {
        this.endpoint = this.parseEndpoint(strEndpoint);
    }

    parseEndpoint(strEndpoint) {
        return parseStringToEnum(strEndpoint.toUpperCase(), Configuration.ENDPOINT);
    }
}

Configuration.ENDPOINT = {
    'LAMBDA': 0,
    'HTTP': 1,
};
