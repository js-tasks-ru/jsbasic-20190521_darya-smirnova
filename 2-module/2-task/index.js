/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */

function isEmpty(obj) {
    let counter = 0;
    for (var key in obj){
        counter++
    }
    if (counter > 0){
        return false;
    } else {
        return true;
    }
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false