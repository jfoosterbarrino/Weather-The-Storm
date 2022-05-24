var APIKey = "a56e390a1d9c466d7758de1e022114bb"
submitButton()


function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    console.log(document.getElementsByClassName("city-zip").value)
    // console.log(document.getElementsByClassName("city-zip")[1].value)
    doAPICall(document.getElementsByClassName("city-zip")[0].value)
}

function submitButton(){
    let button = document.getElementById("submit")
    button.addEventListener("click",(e)=>handleSubmit(e))
}

async function doAPICall(location){
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKey}`);
    console.log(response)
    response = response.data

    // let card = document.getElementById("card");
    // let img = document.createElement("div");
    // img.innerHTML = "<img id ='img' src='./images/weather.gif' class='card-img' height =250>";
    // card.appendChild(img);

    let city = document.getElementById("city");
    city.innerText = response['name']
    
    let temp = document.getElementById("temp");
    temp.innerText = `${Math.round((((response['main']['temp'])-273.15)*1.8)+32)}\u00B0F`
    
    // let desc = document.getElementById("desc");
    // desc.innerText = response['weather'][0]['main']
    
    let high = document.getElementById("high");
    high.innerText =  `High: ${Math.round((((response['main']['temp_max'])-273.15)*1.8)+32)}\u00B0F`
    
    let low = document.getElementById("low");
    low.innerText =  `Low: ${Math.round((((response['main']['temp_min'])-273.15)*1.8)+32)}\u00B0F`
    
    let forecast = document.getElementById("forecast");
    forecast.innerText = response['weather'][0]['main']
    
    let humidity = document.getElementById("humidity");
    humidity.innerText = "Humidity: "+response['main']['humidity']
    
}