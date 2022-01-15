"use strict";
/** Creates object from array of keys and array of values
 * If not enough values, the extra keys have value null.
 * If not enough keys, the extra values are ignored.
 */
function twoArrayObject(keys, values) {
    const obj = {}

    for (let i = 0; i < keys.length; i++) {
        if (i >= values.length) {
            obj[keys[i]] = null;
        } else {
            obj[keys[i]] = values[i]
        }
    }

    return obj;
}
