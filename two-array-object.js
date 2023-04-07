"use strict";

/*

input: one array of keys, one array of values 
output: object 

if not enough values, the rest of keys are null
if not enough keys, ignore the rest of the values 

have an obj object that will store our key/values later on
need to loop through our array of keys
    we will assign key value pairs into our storage obj

    if our second array (values) has fewer elements than our array (keys)
    the array (keys) values will be null

*/

// add whatever parameters you deem necessary & write docstring
function twoArrayObject(keys, values) {
    let storageKeysValues = {};

    for (let i = 0; i < keys.length; i++) {
        if (values[i] === undefined) {
            storageKeysValues[keys[i]] = null;
        } else {
            storageKeysValues[keys[i]] = values[i];
        }
    }

    return storageKeysValues;
}
