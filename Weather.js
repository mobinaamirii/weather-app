const cityInput = document.getElementById("cityInput");
const addInput = document.getElementById("add");
const cityOutput = document.getElementById("cityoutput");
const descOutput = document.getElementById("description");
const tempOutput = document.getElementById("temp");
const windOutput = document.getElementById("wind");
const apiKey = "3045dd712ffe6e702e3245525ac7fa38";


function convertToCel(value){
    return (value-273).toFixed(2);
}
async function GetWeather(){
    const weatherResult = await(await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}
`)).json();

setInfo(weatherResult);

};

function setInfo(data){
    const city = data["name"];
    const description = data["weather"][0]["description"]
    const temp = data["main"]["temp"];
    const wind= data["wind"]["speed"];

    cityOutput.innerHTML = `City : ${city}` ;
    descOutput.innerHTML = `Description : ${description}` ;
    tempOutput.innerHTML = `Temp : ${convertToCel(temp)}` ;
    windOutput.innerHTML = `Wind : ${wind}` ;
}

addInput.addEventListener('click',GetWeather);