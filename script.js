// random joke endpoint
const JOKE_URL = "https://api.chucknorris.io/jokes/random"

// fetch random joke 
fetch(JOKE_URL)
    .then(response => response.json())
    .then(data => setData(data.value))

// insert joke into h1
function setData(value){
    // target h1
    document.getElementById("joke").innerText = value 
}