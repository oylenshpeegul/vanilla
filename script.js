
function beans() {
    let b = parseFloat(document.getElementById("beans").value);
    document.getElementById("liquor").value = b * 8;
    document.getElementById("oneandahalf").value = b * 6;
    document.getElementById("double").value = b * 4;
}

function liquor() {
    let l = parseFloat(document.getElementById("liquor").value);
    document.getElementById("beans").value = l / 8;
    document.getElementById("oneandahalf").value = l * (6 / 8);
    document.getElementById("double").value = l * (4 / 8)
}

function one_and_a_half_fold() {
    let o = parseFloat(document.getElementById("oneandahalf").value);
    document.getElementById("beans").value = o / 6;
    document.getElementById("liquor").value = o * (8 / 6);
    document.getElementById("double").value = o * (4 / 6);
}

function double_fold() {
    let d = parseFloat(document.getElementById("double").value);
    document.getElementById("beans").value = d / 4;
    document.getElementById("liquor").value = d * (8 / 4);
    document.getElementById("oneandahalf").value = d * (6 / 4);
}
