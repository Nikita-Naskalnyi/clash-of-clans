function toggleMenu() {
    var menu = document.getElementById('side-menu');
    if (menu.style.width === '500px') {
        menu.style.width = '0';
    } else {
        menu.style.width = '500px';
    }
}

window.onload = function() {
    var menu = document.getElementById('side-menu');
    menu.style.width = '0';
}
