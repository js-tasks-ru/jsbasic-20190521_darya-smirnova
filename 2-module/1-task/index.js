/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
    const copy = {};
    for (let key in obj) {
        if(obj[key] && typeof obj[key] === 'object'){
            copy[key] = clone(obj[key]);
        }else{
            copy[key] = obj[key];
        }
    }
    return copy;
}