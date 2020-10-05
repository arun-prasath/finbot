'use strict';

exports.dehydrate = (fields,payload) => {
    let obj = {};
    for (let field of fields){
        obj[field] = payload[field] || '';
    }
    return obj;
};