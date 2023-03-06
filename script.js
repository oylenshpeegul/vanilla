
function reliquor() {
    let b = parseInt(document.getElementById("beans").value);
    document.getElementById("liquor").value = 8 * b;
}

function rebeans() {
    let l = parseInt(document.getElementById("liquor").value);
    document.getElementById("beans").value = l /8;
}
