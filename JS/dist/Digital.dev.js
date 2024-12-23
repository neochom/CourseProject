"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var stats = document.querySelectorAll('.stat-digital');

  var countUp = function countUp(element, target) {
    var count = 0;
    var increment = Math.ceil(target / 100); // Увеличиваем значение на 1% от целевого значения

    var updateCount = function updateCount() {
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

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        stats.forEach(function (stat) {
          var targetValue = parseInt(stat.textContent);
          countUp(stat, targetValue);
        });
        observer.disconnect(); // Отключаем наблюдатель после анимации
      }
    });
  }); // Наблюдаем за блоком с классом .AboutUs-stats

  var statsBlock = document.querySelector('.AboutUs-stats');
  observer.observe(statsBlock);
});