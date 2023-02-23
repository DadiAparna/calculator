
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







