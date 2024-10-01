const logo = document.getElementById('logo');
const nav = document.getElementById('nav');

logo.addEventListener('click', function() {
    if (nav.style.width === '800px') {
        nav.style.width = '0';
    } else {
        nav.style.width = '800px'; 
    }
});

// Add confetti effect on hover over "Winners" text
document.getElementById('winners').addEventListener('mouseenter', function() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});

// Optional: Stop confetti when the mouse leaves the "Winners" text
document.getElementById('winners').addEventListener('mouseleave', function() {
    confetti.reset();
});