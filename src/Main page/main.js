const logo = document.getElementById('logo');
const nav = document.getElementById('nav');

logo.addEventListener('click', function() {
    if (nav.style.width === '800px') {
        nav.style.width = '0';
    } else {
        nav.style.width = '800px'; 
    }
});

