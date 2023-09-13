const startAddMovieButton = document.querySelector("header button")
const addMovieModal = document.getElementById("add-modal")
const backdrop = document.getElementById ("backdrop")
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive")
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling
const userInputs = addMovieModal.querySelectorAll("input")
const modalStart = document.getElementById("entry-text")
const movieList = document.getElementById("movie-list")




const movies = []

const toggleMovieModal = () => {
        addMovieModal.classList.toggle("visible")
        toggleBackdrop()
}

clearMovieInput = () =>{
    for (const userInput of userInputs){
        userInput.value =""
    }
}

const toggleBackdrop = () => {
backdrop.classList.toggle("visible")
}

const cancelAddMovie = () => {
    toggleMovieModal()
    clearMovieInput()
}

const backdropClickHandler = () =>{
    toggleMovieModal()
}

const addMovieHandler = ()=>{
const titleValue = userInputs[0].value
const imageUrlValue = userInputs[1].value
const ratingValue = userInputs[2].value
if(titleValue.trim() === "" || 
imageUrlValue.trim()=== "" || 
ratingValue.trim() ==="" ||
+ratingValue < 1 ||
+ratingValue > 5){
    alert("Please, enter valid values");
return;
} 
    const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
}
movies.push(newMovie)
console.log(movies)

toggleMovieModal()
clearMovieInput()
modalStart.style.display="none"

const nodeLi = document.createElement("li")
movieList.appendChild(nodeLi)
nodeLi.append(` ${titleValue}  ${imageUrlValue}  ${ratingValue}`)
// nodeLi.appendChild(document.createTextNode(imageUrlValue))
// nodeLi.appendChild(document.createTextNode(ratingValue))

// const nodeLi1 = document.createElement("li")
// movieList.appendChild(nodeLi1)
// nodeLi1.textContent = titleValue
//  const nodeLi2 = document.createElement("li")
//  movieList.appendChild(nodeLi2)
// nodeLi2.textContent = imageUrlValue
// const nodeLi3 = document.createElement("li")
// movieList.appendChild(nodeLi3)
// nodeLi3.textContent = ratingValue
//  movieList.classList.add("movie-list") 

}


startAddMovieButton.addEventListener("click", toggleMovieModal) 
backdrop.addEventListener("click", toggleMovieModal) 
cancelAddMovieButton.addEventListener("click", cancelAddMovie) 
confirmAddMovieButton.addEventListener("click", addMovieHandler)

