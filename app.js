let display = document.querySelector('.display');

let buttons = Array.from(document.querySelectorAll('.button'));

buttons.map((button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'AC':
                display.innerText = '0';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);        //переписать без 'eval' !
                } catch (e) {
                    display.innerText = 'Error!';
                }
                break;
            case '%':
                let passedText = display.innerText + '/100';
                display.innerText = eval(passedText);
                break;
            case '+/-':
                let negativ = '-' + display.innerText;
                display.innerText = negativ;
                break;
            default:
                if (display.innerText === '0' && e.target.innerText !== '.') {
                    display.innerText = e.target.innerText;
                } else {
                    display.innerText += e.target.innerText;
                }
        }
    });
});