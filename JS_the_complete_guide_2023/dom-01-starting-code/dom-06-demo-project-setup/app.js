const startAddMovieButton = document.querySelector("header button")
const addMovieModal = document.getElementById("add-modal")
const addMovieModalBackground = document.getElementById ("backdrop")
const cancelButton = document.querySelector(".btn")
console.log(cancelButton)

const toggleMovieModal = () => {
        addMovieModal.classList.toggle("visible")
}

const changeBackground = () => {
addMovieModalBackground.classList.toggle("visible")
}

const cancelModal = () =>{
    addMovieModalBackground.classList.remove("visible")
    addMovieModal.classList.remove("visible")
}

startAddMovieButton.addEventListener("click", toggleMovieModal)
startAddMovieButton.addEventListener("click", changeBackground)
cancelButton.addEventListener("click", cancelModal)    

