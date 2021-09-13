const apiKey = "8c7e30ae";
const apiSite = `https://www.omdbapi.com/?apikey=${apiKey}`;
const mainContainer = document.querySelector(".main");
const searchButton = document.querySelector(".searchButton");

async function searchMovie() {
    mainContainer.innerHTML = "";
    const search = document.querySelector('.searchBox').value;
    const grabMovie = await fetch(apiSite + `&s=${search}`);
    const jsonMovie = await grabMovie.json();

    for (const movie of jsonMovie.Search) {
        const movieDiv = document.createElement("div");
        movieDiv.className = "movies";
        const poster = document.createElement("img");
        console.table(movie);
        const movieName = document.createElement("h2");
        poster.src = movie.Poster;
        movieName.innerText = movie.Title;
        movieDiv.append(movieName, poster);
        mainContainer.append(movieDiv);
                                                                                                            
    }
}
searchButton.addEventListener("click", () => searchMovie());
var input = document.getElementById("searchBox");
  input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
          event.preventDefault();
          document.getElementById("myBtn").click();
      }
  });
searchButton.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      searchMovie();
    }
});