const startAddMovieButton = document.querySelector("header button")
const addMovieModal = document.getElementById("add-modal")
const backdrop = document.getElementById ("backdrop")
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive")
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling
const userInputs = addMovieModal.querySelectorAll("input")

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
}




startAddMovieButton.addEventListener("click", toggleMovieModal) 
backdrop.addEventListener("click", toggleMovieModal) 
cancelAddMovieButton.addEventListener("click", cancelAddMovie) 
confirmAddMovieButton.addEventListener("click", addMovieHandler)

