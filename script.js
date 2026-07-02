function showPage(pageId){

    // Находим все страницы
    const pages = document.querySelectorAll(".page");

    // Скрываем все страницы
    pages.forEach(page => {
        page.classList.remove("active");
    });

    // Показываем выбранную страницу
    const current = document.getElementById(pageId);

    if(current){
        current.classList.add("active");
    }

    // Поднимаем страницу вверх
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}