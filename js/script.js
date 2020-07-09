// GA API key 53aa2cd6 for OMDb

// OMDb data req URL http://www.omdbapi.com/?apikey=[yourkey]&

// unicode encoding for space is %20

// create a promise

//promises are thenable - tell JS promise and 'then' function()

// then method gets 2 callbacks


// then talk about promises

// promises are a big box - data or error come back in them from the API

let cityData, userInput;

const $location = $('#location');
const $year = $('#temp');
const $rated = $('#feels');
const $input = $('input[type="text"]');
$('form').on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault();

    userInput = $input.val();
    $.ajax({
        url: `https://www.omdbapi.com/?apikey=53aa2cd6&t=${userInput}`
    }).then(
        (data) => {
            console.log("Data Is", data);
            movieData = data;
            render();

        },
        (error) => {
            console.log("Error is", error);
        }
    )
}

// Above: 'Title', 'Year', and 'Rated' come from object returned by the API, our variables match our index.html file

function render() {
    $title.html(movieData.Title);
    $year.html(movieData.Year);
    $rated.html(movieData.Rated);
    $('img').attr('src', movieData.Poster);
}