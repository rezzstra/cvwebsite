const btnDarkMode = document.querySelector('.dark-mode-btn'); // Создали переменную по классу.

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active'); // Если включен ночной режим
    document.body.classList.add('dark');
}

else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.add('dark-mode-btn--active'); // Если тема светлая, то удаляем все настройки, связ. с темной темой.
    document.body.classList.add('dark');
}


btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle('dark-mode-btn--active'); // Если нажали на кнопку, то добавляем или убираем 'dark-mode-btn--active'.
    const isDark = document.body.classList.toggle('dark'); // По нажатию на кнопку переключения меняется тема.

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
                                                           // Сайт будет автоматически проверять, какя тема используется на сайте в наст. время.
    } else {
        localStorage.setItem('darkMode', 'light');
    }




} 