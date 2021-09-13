async function getJoke() {
    const jokeContainer = document.querySelector(".jokes")
    newJoke = await fetch(`https://official-joke-api.appspot.com/random_joke`)
    jsonJokes = await newJoke.json()
    console.log(jsonJokes)
    addJoke = document.createElement("p")
    jokeContainer.innerHTML = JSON.stringify(newJoke);

}

const jokeButton = document.querySelector(".jokeButton");
jokeButton.addEventListener("click", () => getJoke());