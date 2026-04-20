const budgetInput = document.getElementById('budget');

budgetInput.addEventListener('input', () => {
    budgetInput.value = budgetInput.value.replace(/[^0-9]/g, '');
});

budgetInput.addEventListener('blur', () => {
    const num = budgetInput.value.replace(/[^0-9]/g, '');
    if (num) budgetInput.value = num + ' kr';
});

budgetInput.addEventListener('focus', () => {
    budgetInput.value = budgetInput.value.replace(' kr', '');
});

const filterButton = document.getElementsByClassName("close-filter")[0];
const filterIcon = document.getElementById("filter-icon");
const filterSettings = document.getElementsByClassName("filter")[0];
let isFilter = false;

filterSettings.style.display = 'none';
filterIcon.src = isFilter ? 'images/x.png' : 'images/filter.png';

filterButton.addEventListener('click', () => {
    isFilter = !isFilter;
    filterSettings.style.display = filterSettings.style.display === 'none' ? 'block' : 'none';
    filterIcon.src = isFilter ? 'images/x.png' : 'images/filter.png';
});

const slider = document.getElementById('price-slider');

noUiSlider.create(slider, {
    start: [59, 369],
    connect: true,
    range: {
        min: 0,
        max: 1000
    }
});

slider.noUiSlider.on('update', (values) => {
    const min = Math.round(values[0]);
    const max = Math.round(values[1]);
    document.getElementById('slider-values').textContent = `${min}kr - ${max}kr`;
});

const searchInput = document.querySelector('.search-container input');
const results = document.querySelectorAll('.result');
const divResults = document.getElementsByClassName("results")[0];
divResults.style.display = 'none';

searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.trim().toLowerCase();

    if(searchValue.length > 0){
        divResults.style.display = 'block';
    } else {
        divResults.style.display = 'none';
    }
    
    results.forEach(result => {
        const text = result.textContent.toLowerCase();

        if (text.includes(searchValue)) {
            result.style.display = 'block';
        } else {
            result.style.display = 'none';
        }
    });
});

document.getElementById('reset-btn').addEventListener('click', () => {
    slider.noUiSlider.reset();
    document.getElementById('slider-values').textContent = '59kr - 369kr';
});