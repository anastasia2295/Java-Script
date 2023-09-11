const startAddMovieButton = document.getElementById("header button")
const addMovieModal = document.getElementById("add-modal")

const toggleMovieModal = () => {
        addMovieModal.classList.toggle("visible")
}

startAddMovieButton.addEventListener("click", toggleMovieModal)
    
