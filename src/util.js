/* @flow */

export function extractKeys(obj : ?Object, keys : Array<string>) : Object {
    let result = {};

    if (!obj) {
        return result;
    }

    for (let key of keys) {
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }

    return result;
}
