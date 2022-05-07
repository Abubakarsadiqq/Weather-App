 let weather= {
      "apikey": "dc074250e62fb7c7c233049e2d3ce4a4",
     fetchWeather: function(city){
          fetch( "https://api.openweathermap.org/data/2.5/weather?q=" 
            +city
            + "&appid="
            + this.apikey,

          )

      .then((response)=> response.json())
      .then((data) => this.displayWeather(data));

        },

     displayWeather: function(data){
         const {name} = data;
         const {icon,description}=data.weather[0];
         const {temp, humidity} = data.main;
         const {speed} = data.wind;

          document.querySelector('.city').innerText= "weather in " + name;
          document.querySelector('.icon').src=
          "https://openweathermap.org/img/wn/" + icon + ".png";
          document.querySelector('.description').innerText= description ;
          document.querySelector('.temp').innerText = temp + "°C";
          document.querySelector('.humidity').innerText = "humidity: " + humidity +'%';
          document.querySelector('.speed').innerText="wind speed: " + speed + "km/hr";
          document.querySelector('.weather').classList.remove('loading');
          document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/? " + name + " ')";
        },
       
           search: function(){
        this.fetchWeather(document.querySelector('.search-button').value);
     }, 
    
    };

document.querySelector('.search button').addEventListener('click',()=>{
    weather.search();


     });

document.querySelector('.search-button').addEventListener('keyup' , (event)=>{

    if (event.key =="Enter"){
        weather.search();
       
       
        }


      });

weather.fetchWeather("Denver");