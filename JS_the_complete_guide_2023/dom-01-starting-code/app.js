const startAddMovieButton = document.querySelector("header button")
const addMovieModal = document.getElementById("add-modal")
const backdrop = document.getElementById ("backdrop")
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive")
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling
const userInputs = addMovieModal.querySelectorAll("input")


const toggleMovieModal = () => {
        addMovieModal.classList.toggle("visible")
        toggleBackdrop()
}

const toggleBackdrop = () => {
backdrop.classList.toggle("visible")
}

const cancelAddMovie = () => {
    toggleMovieModal()
}

const backdropClickHandler = () =>{
    toggleMovieModal()
}

const addMovieHandler = ()=>{
const titleValue = userInputs[0].value
const imageUrlValue = userInputs[2].value
const ratingValue = userInputs[3].value
if(titleValue.trim() === "" || 
imageUrlValue.trim()=== "" || 
ratingValue.trim() ==="" ||
+ratingValue < 1 ||
+ratingValue > 5){
    alert("Please, enter valid values")
}return
}


startAddMovieButton.addEventListener("click", toggleMovieModal) 
backdrop.addEventListener("click", toggleMovieModal) 
cancelAddMovieButton.addEventListener("click", cancelAddMovie) 
confirmAddMovieButton.addEventListener("click", addMovieHandler)

