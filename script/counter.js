var counterVal = 1;

function plus() {
    if(counterVal < 8) {
        updateDisplay(++counterVal);
    } else {
        updateDisplay(counterVal = 1);
    }
}

setInterval (() => {
    plus();
}, 5000)

function minus() {
    if(counterVal > 1) {
        updateDisplay(--counterVal);
    }
}

function updateDisplay(val) {
    document.getElementById("number__alt").innerHTML = val;
}