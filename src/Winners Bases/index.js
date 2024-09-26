const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;
const totalSlides = slides.length;

// Функция для показа слайда и обновления активной точки
function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

    // Обновляем активную точку
    updateActiveDot(currentSlide);
}

// Обновляем активную точку
function updateActiveDot(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Принудительное переключение стрелками
document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

// Автопереключение
let autoSwitch = setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000); // Переключаем каждые 3 секунды

// Остановка автопереключения при нажатии на стрелки
document.querySelector('.next').addEventListener('click', () => {
    clearInterval(autoSwitch);
    autoSwitch = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000);
});

document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(autoSwitch);
    autoSwitch = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000);
});

// Переход по клику на слайд
slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        alert(`Вы кликнули на слайд ${index + 1}`);
    });
});

// Переключение слайда по клику на точку
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        clearInterval(autoSwitch);
        autoSwitch = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 3000);
    });
});

// Инициализация слайда и активной точки при загрузке
showSlide(currentSlide);

function copyLink() {
    const tempInput = document.createElement('input');
    tempInput.value = 'https://example.com'; // Ссылка, которую вы хотите скопировать
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Ссылка скопирована!');
}
