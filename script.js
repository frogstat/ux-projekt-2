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