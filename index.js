const input = document.querySelector('.input');
var btn = document.querySelector('.btn');
const data = document.querySelector('.data');
const API_key = "684e162e2b6093f6aed23dcd4c7e4c55";


btn.addEventListener('click' , ()=> {
    const city = input.value; 
    // console.log(city);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        input.value = "";

        document.querySelector('.output').innerHTML=`
                        <ul>
                            <li class="temp"> ${data.main.temp}°C </li>
                            <li class="minmax"> Min. Temp.= ${data.main.temp_min}°C , Max. Temp.= ${data.main.temp_max}°C </li>
                            <li class="city"> ${data.name}</li>
                           <li class="desc">${data.weather[0].description}</li>
                        </ul>
                         `;

    });
});