function c() {
    document.getElementById("screen").value = "";
}
function show(input) {
    document.getElementById("screen").value += input;
}
function cal() {
    var output = eval(document.getElementById("screen").value);
    document.getElementById("screen").value = output
}