function Display(value) {
    document.getElementById("display").value += value;
}
function clr() {
    document.getElementById("display").value = '';
}
function deleteLast() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}

function Result() {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
}
