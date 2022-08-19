function getpin() {
    const pin = getGenerateRandom();
    pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        console.log('not 4 digit')
        return getpin();
    }

}


function getGenerateRandom() {
    const random = Math.round(Math.random() * 10000);
    return random;

}
document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getpin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})
//calculate 
document.getElementById('calculator').addEventListener('click', function (event) {
    const calculateNumber = event.target.innerText;
    const inputId = document.getElementById('display-input');
    const priviosValue = inputId.value;
    if (isNaN(calculateNumber)) {
        if (calculateNumber === 'C') {
            inputId.value = '';
        }
        else if (calculateNumber === '<') {
            const digits = priviosValue.split('');
            digits.pop();
            const remaingDigit = digits.join('');
            inputId.value = remaingDigit;
        }
    }
    else {

        const priviosValue = inputId.value;
        const newNumber = priviosValue + calculateNumber;
        inputId.value = newNumber;

    }
})
document.getElementById('submit-btn').addEventListener('click', function () {
    const displayPin = document.getElementById('display-pin');
    const currentPin = displayPin.value;

    const displayNumber = document.getElementById('display-input');
    const couurentNumber = displayNumber.value;
    const pinSuccses = document.getElementById('pin-success');
    const pinFailed = document.getElementById('pin-fail');
    if (currentPin === couurentNumber) {

        pinSuccses.style.display = 'block';
        pinFailed.style.display = 'none';
    }
    else {

        pinFailed.style.display = 'block';
        pinSuccses.style.display = 'none';
    }

})

