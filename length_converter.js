var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");

//console.log("input",input)

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);


function myResult() {
    //result.value = input.value;

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    //adding formula

    if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) * 0.001;
    } else if (inputTypeValue === "meter" && resultTypeValue === "miles") {
        result.value = Number(input.value) * 0.000621;
    } else if (inputTypeValue === "meter" && resultTypeValue === "foot") {
        result.value = Number(input.value) * 3.28084;
    } else if (inputTypeValue === "meter" && resultTypeValue === "inches") {
        result.value = Number(input.value) * 39.3701;
    } else if (inputTypeValue === "meter" && resultTypeValue === "yards") {
        result.value = Number(input.value) * 1.09361;
    } else if (inputTypeValue === "meter" && resultTypeValue === "meter") {
        result.value = Number(input.value);
    }

    if (inputTypeValue === "kilometer" && resultTypeValue === "meter") {
        result.value = Number(input.value) * 1000;
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "miles") {
        result.value = Number(input.value) * 0.621371;
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "inches") {
        result.value = Number(input.value) * 39370.079;
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "yards") {
        result.value = Number(input.value) * 1093.613;
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "foot") {
        result.value = Number(input.value) * 3280.84
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "kilometer") {
        result.value = Number(input.value);
    }

    if (inputTypeValue === "miles" && resultTypeValue === "meter") {
        result.value = Number(input.value) * 1609.344;
    } else if (inputTypeValue === "miles" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) * 1.60934;
    } else if (inputTypeValue === "miles" && resultTypeValue === "miles") {
        result.value = Number(input.value)
    } else if (inputTypeValue === "miles" && resultTypeValue === "inches") {
        result.value = Number(input.value) * 63360;
    } else if (inputTypeValue === "miles" && resultTypeValue === "yards") {
        result.value = Number(input.value) * 1760;
    } else if (inputTypeValue === "miles" && resultTypeValue === "foot") {
        result.value = Number(input.value) * 5280;
    }

    if (inputTypeValue === "foot" && resultTypeValue === "meter") {
        result.value = Number(input.value) * 0.3048;
    } else if (inputTypeValue === "foot" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) * 0.0003048;
    } else if (inputTypeValue === "foot" && resultTypeValue === "inches") {
        result.value = Number(input.value) * 12;
    } else if (inputTypeValue === "foot" && resultTypeValue === "yards") {
        result.value = Number(input.value) * 0.333333;
    } else if (inputTypeValue === "foot" && resultTypeValue === "foot") {
        result.value = Number(input.value);
    } else if (inputTypeValue === "foot" && resultTypeValue === "miles") {
        result.value = Number(input.value) * 0.000189394;
    }

    if (inputTypeValue === "inches" && resultTypeValue === "meter") {
        result.value = Number(input.value) * 0.0254;
    } else if (inputTypeValue === "inches" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) * 0.00000254;
    } else if (inputTypeValue === "inches" && resultTypeValue === "inches") {
        result.value = Number(input.value);
    } else if (inputTypeValue === "inches" && resultTypeValue === "yards") {
        result.value = Number(input.value) * 0.0277778;
    } else if (inputTypeValue === "inches" && resultTypeValue === "foot") {
        result.value = Number(input.value) * 0.0833333;
    } else if (inputTypeValue === "inches" && resultTypeValue === "miles") {
        result.value = Number(input.value) * 0.000001578;
    }

    if (inputTypeValue === "yards" && resultTypeValue === "meter") {
        result.value = Number(input.value) * 0.9144;
    } else if (inputTypeValue === "yards" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) * 0.0009144;
    } else if (inputTypeValue === "yards" && resultTypeValue === "yards") {
        result.value = Number(input.value);
    } else if (inputTypeValue === "yards" && resultTypeValue === "miles") {
        result.value = Number(input.value) * 0.000568182;
    } else if (inputTypeValue === "yards" && resultTypeValue === "inches") {
        result.value = Number(input.value) * 36;
    } else if (inputTypeValue === "yards" && resultTypeValue === "foot") {
        result.value = Number(input.value) * 3;
    }

}
