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
filterIcon.src = isFilter ? 'x.png' : 'filter.png';

filterButton.addEventListener('click', () => {
    isFilter = !isFilter;
    filterSettings.style.display = filterSettings.style.display === 'none' ? 'block' : 'none';
    filterIcon.src = isFilter ? 'x.png' : 'filter.png';
});