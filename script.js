
    
    const Button = document.querySelector("button");
    const input = document.querySelector(".search-bar")
    const city = document.querySelector(".city")
    const weatherlo = document.querySelector(".weather")
    const flex =document.querySelector(".flex")
    const msg = document.querySelector(".msg")
    const info = document.querySelector(".info")
    

    Button.addEventListener("click", btn);

     const apiKey = "40125f41e09f2d5d4d3757d1e85c99dc";
    function btn(e) {
        e.preventDefault();
        let inputVal = input.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`
        fetch(url)
            .then(response => response.json())
            .then(data => {

                console.log(data);
                const { main, name, sys, weather,humidity,wind,icon } = data;
                const i = data.weather[0].icon;

            const markup = `
                <h2   class='city-name' data-name=${name},>
                <span>${name}</span>
                <span>${sys.country}</span>
             </h2>
             <h1 class='temp'>${Math.round(main.temp)}°C</h1>
                <figure>
                <figurecaption>${weather[0]["description"]}</figurecaption>
                <img class='icon' src='http://openweathermap.org/img/wn/${i}.png' alt ='city' >

                </figure>
                <div class="humidity">Humidity:  ${data.main.humidity}%</div>
                <div class="wind">Wind speed:  ${data.wind.speed} km/h</div>
                `;
                flex.innerHTML = markup;
// //////////////////////////////////////////////////////////////////////
                const div = document.createElement("div");
                div.classList.add("new");
                const mark = `
                <h2 class='city-name' data-name=${name}>
                    <span>${name}</span>
                </h2>
                <div class='city-new'>${Math.round(main.temp)}°C</div>
                `;
                div.innerHTML = mark;
                info.appendChild(div);

            }) .catch(() => {
                     // msg 
            })
            input.value = ""
       
}





                            // li.classList.add("new");
                // li.innerText = "kkkkkk"
                // console.log(li)
                // `${name} ${Math.round(main.temp)}°C`