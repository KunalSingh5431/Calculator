function appendToResult(value) {
    document.getElementById('results').value += value;
}

function clearResult() {
    document.getElementById('results').value = '';
}

function calculateResult() {
    var result = document.getElementById('results').value;
    var calculatedResult = eval(result);
    document.getElementById('results').value = calculatedResult;
}
