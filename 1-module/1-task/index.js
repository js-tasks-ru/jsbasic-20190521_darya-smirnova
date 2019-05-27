/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
// var m = prompt('Введите число','');
// var n = prompt('Введите степень','');
// if (n <= 1) {
//     alert('Степень ' + n +
//         'не поддерживается, введите целую степень, большую 1'
//     );
// } else {
//     alert( pow(m, n) );
// }
function pow (m, n) {
    var result = m;
    for(var i = 1; i < n; i++){
        result *= m;
    }
    return result;
}