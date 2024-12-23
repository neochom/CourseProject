document.addEventListener('DOMContentLoaded', function () {
    const stats = document.querySelectorAll('.stat-digital');

    const countUp = (element, target) => {
        let count = 0;
        const increment = Math.ceil(target / 100); // Увеличиваем значение на 1% от целевого значения

        const updateCount = () => {
            count += increment;
            if (count < target) {
                element.textContent = count;
                requestAnimationFrame(updateCount);
            } else {
                element.textContent = target; // Убедимся, что значение не превышает целевое
            }
        };

        updateCount();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stats.forEach(stat => {
                    const targetValue = parseInt(stat.textContent);
                    countUp(stat, targetValue);
                });
                observer.disconnect(); // Отключаем наблюдатель после анимации
            }
        });
    });

    // Наблюдаем за блоком с классом .AboutUs-stats
    const statsBlock = document.querySelector('.AboutUs-stats');
    observer.observe(statsBlock);
});