let count = 0; //начальный счёт

const counter = document.getElementById('count'); //Находим элемент для счёта
const clickBtn = document.getElementById('clickBtn'); //Находим кнопку

clickBtn.onclick = function() {
    count++; //+ 1 в счёте
    counter.textContent = count; //Обновляем счет после +1
}