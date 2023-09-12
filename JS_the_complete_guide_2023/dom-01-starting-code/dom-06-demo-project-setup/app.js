const startAddMovieButton = document.querySelector("header button")
const addMovieModal = document.getElementById("add-modal")
const backdrop = document.getElementById ("backdrop")
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive")


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


startAddMovieButton.addEventListener("click", toggleMovieModal) 
backdrop.addEventListener("click", toggleMovieModal) 
cancelAddMovieButton.addEventListener("click", cancelAddMovie) 

