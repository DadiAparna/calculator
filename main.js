//----------------------calaculator------------------------//

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

//-----------------------length converter-----------------------//

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


//----------------------------mass converter--------------------------//


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


//--------------------weather-----------------------//


const apiKey = "081acd3aaa52f7faaee2e11c5d24ee7f";

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

//console.log(main);

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

async function getWeatherByLocation(city) {

    const resp = await fetch(url(city), {
        origin: "c"
    });
    const respData = await resp.json();

    addWeatherToPage(respData);

}

function addWeatherToPage(data) {
    const temp = Ktoc(data.main.temp);

    const weather = document.createElement('div')
    weather.classList.add('weather');

    weather.innerHTML = `
      <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
      <small>${data.weather[0].main}</small>
      `;
    //   cleanup 
    main.innerHTML = "";
    main.appendChild(weather);

};


function Ktoc(K) {
    return Math.floor(K - 273.15);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = search.value;

    if (city) {
        getWeatherByLocation(city)
    }

});


//-------------------navbar-------------------//

document.querySelector(".c").onclick = function () {
    document.getElementById("calci").style.display = "none";
    document.getElementById("length").style.display = "none";
    document.getElementById("mass").style.display = "none";
    document.getElementById("currency").style.display = "block";
    document.getElementById("weather").style.display = "none";

}
document.querySelector(".m").onclick = function () {
    document.getElementById("calci").style.display = "none";
    document.getElementById("length").style.display = "none";
    document.getElementById("currency").style.display = "none";
    document.getElementById("mass").style.display = "block";
    document.getElementById("weather").style.display = "none";
}

document.querySelector(".l").onclick = function () {
    document.getElementById("calci").style.display = "none";
    document.getElementById("mass").style.display = "none";
    document.getElementById("currency").style.display = "none";
    document.getElementById("length").style.display = "block";
    document.getElementById("weather").style.display = "none";

}

document.querySelector(".cal").onclick = function () {
    document.getElementById("calci").style.display = "block";
    document.getElementById("length").style.display = "none";
    document.getElementById("mass").style.display = "none";
    document.getElementById("currency").style.display = "none";
    document.getElementById("weather").style.display = "none";

}

document.querySelector(".w").onclick = function () {
    document.getElementById("weather").style.display = "block";
    document.getElementById("length").style.display = "none";
    document.getElementById("mass").style.display = "none";
    document.getElementById("currency").style.display = "none";
    document.getElementById("calci").style.display = "none";

}





