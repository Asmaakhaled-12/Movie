import * as form from './form.js '
import * as nav from './navbar.js '

let Movies = [];
let rows = document.getElementById("rowBody");
let searchInCurrentCategory = document.getElementById("searchInCurrentCategory");
let searchInAllMovies = document.getElementById("searcInAllCategories");
let categoryHref = document.getElementsByTagName("li");
getMovies("now_playing");


for (var i = 0; i < categoryHref.length; i++) {
    categoryHref[i].addEventListener("click", function (e) {
        var currentCategory = e.target.id;
        getMovies(currentCategory);
    })
}


async function getMovies(currentCategory) {
    let response;
    if (currentCategory == "TRENDING")

        response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR0eLSgFheLq2ANTnIg5Ci0Ix_RqnXrlNlxpPt-hzZeXSiHXCF8nyZnCGns`)

    else
        response = await fetch(`https://api.themoviedb.org/3/movie/${currentCategory}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2nSwXCwEIWnIH6xK8FTthJscDdOCaKf7juhZw8hSBAjtzYnrAh57lqog0`)


    Movies = await response.json();
    Movies = Movies.results;
    displayMovies(Movies);


}



function displayMovies(movies) {
    if (movies == null)
        return;

    else {
        var cols = ``;
        for (var i = 0; i < movies.length; i++) {
            if (movies[i].title == undefined) {
                movies[i].title = "undefind"
            }
            cols +=
                `
        <div class="col-md-6 col-lg-4 my-3 pl ml-md-0 ml-sm-4 overflow-hidden shadow my-3 ">
         <div class="oneMovie position-relative">
            <img class="img-fluid rounded" src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}">

            <div class="overLayer rounded shadow position-absolute">
                <div class="overLayerContainer text-center">
                    <h1>${movies[i].title}</h1>
                    <p>${movies[i].overview}</p>
                    <p>${movies[i].vote_average}</p>
                    <p>${movies[i].release_date}</p>
                </div>
            </div>
         </div>
        </div> `
        }
        rows.innerHTML = cols;
    }
}



searchInCurrentCategory.addEventListener("keyup", function () {
    searchInCategory(this.value);
})


searchInAllMovies.addEventListener("keyup", function () {
    searchInAll(this.value);
})


function searchInCategory(word) {
    if (Movies == null)
        return;

    else {
        var cols = ``;
        for (var i = 0; i < Movies.length; i++) {
            if (Movies[i].title == undefined) {
                Movies[i].title = "undefind"
            }
            if (Movies[i].title.toUpperCase().includes(word.toUpperCase())) {
                cols += `
    <div class="col-md-6 col-lg-4 my-3 overflow-hidden shadow my-3 ">
        <div class="oneMovie position-relative">
            <img class="img-fluid rounded" src="https://image.tmdb.org/t/p/w500${Movies[i].poster_path}">

            <div class="overLayer rounded shadow position-absolute">
                <div class="overLayerContainer text-center">
                    <h1>${Movies[i].title}</h1>
                    <p>${Movies[i].overview}</p>
                    <p>${Movies[i].vote_average}</p>
                    <p>${Movies[i].release_date}</p>
                </div>
            </div>
        </div>
    </div>  
          `
            }

        }
        rows.innerHTML = cols;
    }
}



async function searchInAll(keyword) {
    if (keyword == "")
        return;

    else {
        let allMovies = [];
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR0eLSgFheLq2ANTnIg5Ci0Ix_RqnXrlNlxpPt-hzZeXSiHXCF8nyZnCGns&language=en-US&query=${keyword}`)
        allMovies = await response.json();
        allMovies = allMovies.results;
        displayMovies(allMovies);
    }
}