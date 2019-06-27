'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(array) {
    const ul = document.createElement('ul');
    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(array[i].firstName + ' ' + array[i].lastName));
        ul.appendChild(li);
    }
    return ul;
}