document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen');
    const keys = document.querySelectorAll('.calculator-keys button');

    keys.forEach(key => {
        key.addEventListener('click', (event) => {
            const { target } = event;
            const action = target.textContent;

            if (target.classList.contains('operator')) {
                handleOperator(action);
            } else if (target.classList.contains('equals')) {
                calculate();
            } else if (target.classList.contains('clear')) {
                screen.value = '';
            } else {
                handleNumber(action);
            }
        });
    });

    document.addEventListener('keydown', (event) => {
        if (isFinite(event.key)) {
            handleNumber(event.key);
        } else if (['+', '-', '*', '/', '%'].includes(event.key)) {
            handleOperator(event.key);
        } else if (event.key === 'Enter') {
            calculate();
        } else if (event.key === 'Escape') {
            screen.value = '';
        } else {
            alert('Only numbers are allowed');
        }
    });

    function handleNumber(number) {
        screen.value += number;
    }

    function handleOperator(operator) {
        if (screen.value && !isNaN(screen.value[screen.value.length - 1])) {
            screen.value += operator;
        }
    }

    function calculate() {
        try {
            screen.value = eval(screen.value.replace(/[^-()\d/*+.]/g, ''));
        } catch (error) {
            alert('Invalid expression');
            screen.value = '';
        }
    }
});
