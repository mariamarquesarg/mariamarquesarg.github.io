var navbarOpen = document.querySelector('.navbar-open');
var navbarClose = document.querySelector('.navbar-close');
var navbarCollapse = document.querySelector('.navbar-collapse');

navbarOpen.addEventListener('click', function () {
    if (!navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.add('show');
    }
});

navbarClose.addEventListener('click', function () {
    if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
    }
});