
function beans() {
    let b = parseFloat(document.getElementById("beans").value);
    document.getElementById("liquor").value = 8 * b;
    document.getElementById("double").value = 4 * b;
}

function liquor() {
    let l = parseFloat(document.getElementById("liquor").value);
    document.getElementById("beans").value = l / 8;
    document.getElementById("double").value = l / 2;
}

function double_fold() {
    let d = parseFloat(document.getElementById("double").value);
    document.getElementById("beans").value = d / 4;
    document.getElementById("liquor").value = 2 * d;
}
