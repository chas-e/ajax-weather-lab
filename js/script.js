// GA API key 53aa2cd6 for OMDb

// OpenWeather API : api.openweathermap.org/data/2.5/weather?q=city name&appid=76ba8c095c64812543d52e97dcde331a

// unicode encoding for space is %20

// create a promise

//promises are thenable - tell JS promise and 'then' function()

// then method gets 2 callbacks


// then talk about promises

// promises are a big box - data or error come back in them from the API

let weatherData, userInput;

const $city = $('#city');
const $temp = $('#temp');
const $feels = $('#feels');
const $forecast = $('#forecast');
const $input = $('input[type="text"]');
$('form').on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault();

    userInput = $input.val();
    $.ajax({
        url: `api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=76ba8c095c64812543d52e97dcde331a`
    }).then(
        (data) => {
            console.log("Data Is", data);
            weatherData = data;
            render();

        },
        (error) => {
            console.log("Error is", error);
        }
    )
}

// Above: 'Title', 'Year', and 'Rated' come from object returned by the API, our variables match our index.html file

function render() {
    $city.html(weatherData.Title);
    $temp.html(weatherData.Year);
    $rated.html(weatherData.Rated);
    $forecast.html(weatherData.Forecast)

}