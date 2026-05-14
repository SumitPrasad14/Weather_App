const apiKey = "405c190929e953e3a13dd5c720d0e146";

const apiUrl =
"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
"&units=metric";
const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")

async function checkweather(city) {

   const response = await fetch(apiUrl+city+ `&appid=${apiKey}`);

   var data = await response.json();

   console.log(data);
   document.querySelector(".City").innerHTML= data.name;
   document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
   document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
   document.querySelector(".Wind").innerHTML= data.wind.speed+"Km/h";



}


searchbtn.addEventListener("click",()=>{


checkweather(searchbox.value);
})