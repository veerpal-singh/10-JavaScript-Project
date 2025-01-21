const fullDarkModeCheckbox = document.querySelector("#full-dark-mode")

const containerDarkModeCheckbox = document.querySelector("#contained-dark-mode")

const container = document.querySelector(".container")

fullDarkModeCheckbox.addEventListener("change", () => {
    if (fullDarkModeCheckbox.checked) {
        document.body.classList.add("dark")
    } else {
        document.body.classList.remove("dark")
    }
    containerDarkModeCheckbox.checked = fullDarkModeCheckbox.checked
    changeContainedDarkMode()

})

const changeContainedDarkMode = () => {
    if (containerDarkModeCheckbox.checked) {

        container.classList.add("dark")

    } else {
        container.classList.remove("dark")
    }
}

containerDarkModeCheckbox.addEventListener("change", () => {
    changeContainedDarkMode()
}) 