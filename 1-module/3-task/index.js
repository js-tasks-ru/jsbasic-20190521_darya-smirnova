'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */


function getMax(str) {
    let arr = str.split(' ');
    let max = 0;
    for(let i = 0; i < arr.length; i++) {
        if( +arr[i] > +max) {
            max = arr[i];
        }
    }
    return max;
}


function getMin(str) {
    if(str.indexOf('хотя') == -1) {
        let arr = str.split(',');
        let min = Infinity;
        for(var i = 0; i < arr.length; i++) {
            if( +arr[i] < min) {
                min = arr[i];
            }
        }return min ;

    } else {
        let arr = str.split(' ');
        let min = Infinity;
        for(var i = 0; i < arr.length; i++) {
            if( +arr[i] < min) {
                min = arr[i];
            }
        }return min ;
    }

}


function getMinMax(sda) {
    let resultat = {
        min: '0' ,
        max: '0',
    };
    let str = sda;
    resultat.min = +getMin(str)
    resultat.max = +getMax(str)

    return resultat;
}


