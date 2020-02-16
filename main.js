var movies = [
  {
    image: "img/parasite.jpg",
    name: "Parasite"
  },
  {
    image: "img/interstellar.jpeg",
    name: "Interstellar"
  },
  {
    image: "img/titanic.jpg",
    name: "Titanic"
  },
  {
    image: "img/scarface.jpg",
    name: "Scarface"
  },
  {
    image: "img/godfather.jpg",
    name: "Godfather"
  },
  {
    image: "img/tarzan.jpg",
    name: "Tarzan"
  },
  {
    image: "img/The_Intouchables.jpg",
    name: "Intouchables"
  },
  {
    image: "img/hills.jpg",
    name: "Hills have eyes"
  },
  {
    image: "img/limitless.jpg",
    name: "Limitless"
  }
];

function createMovies(movies) {
  movies.forEach(function(element) {
    var movie = document.createElement("div");
    var movieInner = document.createElement("div");
    var movieName = document.createElement("h2");
    var movieImg = document.createElement("img");
    var removeBtn = document.createElement("span");

    var movies = document.getElementById("all-movies");

    movie.className = "col-md-4 movie";
    movie.appendChild(movieName);
    movieInner.appendChild(movieImg);
    movieInner.appendChild(removeBtn);
    movie.appendChild(movieInner);
    movies.appendChild(movie);

    movieName.innerHTML = element.name;
    movieImg.src = element.image;
    removeBtn.innerHTML = '<p>Delete</p><i class="fas fa-times-circle"></i>';
  });
}

function filterMovies() {
  var filterInput = document.getElementById("filter");
  filterInput.addEventListener("keyup", filterNames);

  function filterNames() {
    var filterValue = filterInput.value.toLowerCase();
    let outsideDiv = document.getElementById("all-movies");
    var allMovies = outsideDiv.querySelectorAll("div.movie");

    allMovies.forEach(function(element) {
      var nameOfTheMovie = element.querySelector("h2");
      console.log(nameOfTheMovie);
      if (
        nameOfTheMovie.innerHTML.toLocaleLowerCase().indexOf(filterValue) > -1
      ) {
        element.style.display = "";
      } else {
        element.style.display = "none";
      }
    });
  }
}

function remove() {
  var xBtns = document.querySelectorAll("div.movie i");
  var movieDivs = Array.from(document.querySelectorAll("div.movie"));

  movieDivs.forEach(function(element, index) {
    var moviesDivs = document.getElementById("all-movies");
    xBtns[index].addEventListener("click", function() {
      moviesDivs.removeChild(movieDivs[index]);
    });
  });
}

createMovies(movies);
filterMovies();
remove();
