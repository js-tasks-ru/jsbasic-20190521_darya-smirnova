'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let trs = table.querySelectorAll('tr');
    for (let i = 0; i < trs.length; i++) {
        let tds = trs[i].querySelectorAll('td');
        if (tds[3].hasAttribute('data-available') == false) {
            trs[i].setAttribute("hidden", true);
        }

        if (tds[3].getAttribute('data-available') == 'false') {
            trs[i].classList.add('unavailable');
        } else if (tds[3].getAttribute('data-available') == 'true') {
            trs[i].classList.add('available');
        }

        if (tds[2].innerHTML == 'm') {
            trs[i].classList.add('male');
        } else if (tds[2].innerHTML == 'f') {
            trs[i].classList.add('female');
        }

        if (+tds[1].innerHTML < 18) {
            trs[i].style.textDecoration = 'line-through';
        }
    }
    }

