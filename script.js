
function beans() {
    let b = parseFloat(document.getElementById("beans").value);
    document.getElementById("single").value = b * 8;
    document.getElementById("oneandahalf").value = b * 6;
    document.getElementById("double").value = b * 4;
}

function single_fold() {
    let s = parseFloat(document.getElementById("single").value);
    document.getElementById("beans").value = s / 8;
    document.getElementById("oneandahalf").value = s * (6 / 8);
    document.getElementById("double").value = s * (4 / 8)
}

function one_and_a_half_fold() {
    let o = parseFloat(document.getElementById("oneandahalf").value);
    document.getElementById("beans").value = o / 6;
    document.getElementById("single").value = o * (8 / 6);
    document.getElementById("double").value = o * (4 / 6);
}

function double_fold() {
    let d = parseFloat(document.getElementById("double").value);
    document.getElementById("beans").value = d / 4;
    document.getElementById("single").value = d * (8 / 4);
    document.getElementById("oneandahalf").value = d * (6 / 4);
}
