const slider = document.getElementById('inputRange');
        const countDisplay = document.getElementById('EventAndContact-aboutEvent-form-parametrs-parametr-info');

        function updateSliderStyle() {
            const value = slider.value;
            const min = slider.min ? slider.min : 0;
            const max = slider.max ? slider.max : 100;
            const percent = (value - min) / (max - min) * 100;

            slider.style.background = `linear-gradient(to right, #4A4E69 ${percent}%, #e0e0e0 ${percent}%)`;
        }

        slider.addEventListener('input', function() {
            countDisplay.textContent = `${slider.value} человек`;
            updateSliderStyle();
        });

        // Инициализация стиля при загрузке
        updateSliderStyle();