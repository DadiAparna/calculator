var user = document.getElementById("user");
var res = document.getElementById("res");
var userType = document.getElementById("userType");
var resType = document.getElementById("resType");


user.addEventListener("keyup", myResult);
userType.addEventListener("change", myResult);
resType.addEventListener("change", myResult);


function myResult() {
    //res.value = user.value;

    userTypeValue = userType.value;
    resTypeValue = resType.value;

    //adding formula

    if (userTypeValue === "kilograms" && resTypeValue === "grams") {
        res.value = Number(user.value) * 1000;
    } else if (userTypeValue === "kilograms" && resTypeValue === "pounds") {
        res.value = Number(user.value) * 2.20462;
    } else if (userTypeValue === "kilograms" && resTypeValue === "tonnes") {
        res.value = Number(user.value) * 0.001;
    } else if (userTypeValue === "kilograms" && resTypeValue === "kilograms") {
        res.value = Number(user.value);
    }


    if (userTypeValue === "grams" && resTypeValue === "kilograms") {
        res.value = Number(user.value) * 0.001;
    } else if (userTypeValue === "grams" && resTypeValue === "pounds") {
        res.value = Number(user.value) * 0.00220462;
    } else if (userTypeValue === "grams" && resTypeValue === "tonnes") {
        res.value = Number(user.value) * 0.0000001;
    } else if (userTypeValue === "grams" && resTypeValue === "grams") {
        res.value = Number(user.value);
    }


    if (userTypeValue === "pounds" && resTypeValue === "kilograms") {
        res.value = Number(user.value) * 0.453592;
    } else if (userTypeValue === "pounds" && resTypeValue === "grams") {
        res.value = Number(user.value) * 453.592;
    } else if (userTypeValue === "pounds" && resTypeValue === "tonnes") {
        res.value = Number(user.value) * 0.000453592;
    } else if (userTypeValue === "pounds" && resTypeValue === "pounds") {
        res.value = Number(user.value);
    }


    if (userTypeValue === "tonnes" && resTypeValue === "kilograms") {
        res.value = Number(user.value) * 1000;
    } else if (userTypeValue === "tonnes" && resTypeValue === "grams") {
        res.value = Number(user.value) * 1000000;
    } else if (userTypeValue === "tonnes" && resTypeValue === "pounds") {
        res.value = Number(user.value) * 2204.62;
    } else if (userTypeValue === "tonnes" && resTypeValue === "tonnes") {
        res.value = Number(user.value);
    }

}
