//function to display all posters
selectDiv = document.querySelector(".movies");
createUl = document.createElement("ul");


const displayPoster = function () {
    for (let value of Object.values(movies)) {
        posterLink = value.Poster;
        imdbId = value.imdbID;
         image = document.createElement("img");
        image.src = posterLink;
        moviePoster= document.createElement("a")
       moviePoster.href = "https://www.imdb.com/title/"+imdbId+"/";
        movieElement = document.createElement("li");      
        movieElement.id = value.imdbID
        addToDom = selectDiv.appendChild(createUl).appendChild(movieElement).appendChild(moviePoster).appendChild(image);
    }
}
displayPoster();

//const deletePoster = function (){
  ///selectDiv.style.display = "none";
//}


//create variables for the radiobuttons
let radioBtnLatest = document.getElementById("nieuwst");
let radioBtnAvenger = document.getElementById("avenger");
let radioBtnXmen = document.getElementById("xmen");
let radioBtnPrincess = document.getElementById("princess");
let radioBtnBatman = document.getElementById("batman");

//function to show latest movies
const showLatestMovies = function (){
    if (radioBtnLatest.checked === true){
        document.querySelector("ul").style.display = "none"; //hide all movie posters
        latestMovies = movies.filter(movie => movie.Year >= 2014) //filter by year
        latestMoviesArray = [];
        latestMoviesArray.push(latestMovies) //add movies 2014 or newer to array
        for (let value of Object.values(movies)){
        
        
    } 
    }
    showLatestMovies()

    //switch statement for the filters filtered on name
switch (movies) {
    case 'Avengers':
        //onclick bij switch statement hoe? 
        avengerArray = [];
    if (radioBtnAvenger.checked == true){
        avengers = movies.filter( movie=> movie.Title.includes("Avengers"));
        avengerArray.push(avengers);
    }
        break;

    case 'X-Men':
        xmenArray = [];
    if (radioBtnXmen.checked == true){
        xmen = movies.filter( movie => movie.Title.includes("X-Men"));
        xmenArray.push(xmen);
    }
        break;

        case 'Princess':
        princessArray = [];
    if (radioBtnPrincess.checked == true){
        princess = movies.filter( movie => movie.Title.includes("Princess"));
        princessArray.push(princess);
    }
        break;

        case 'Batman':
            let batmanArray = [];
        if (radioBtnBatman.checked == true){
            let batman = movies.filter( movie => movie.Title.includes("Batman"));
            batmanArray.push(batman);
        }
        break;
