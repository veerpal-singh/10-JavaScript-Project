const btns = document.querySelectorAll(".btn")

const body = document.querySelector("body")

btns.forEach((button) => {

    button.addEventListener("click", (e) => {

        if (e.target.id == "grey") {
            body.style.backgroundColor = e.target.id
        }

        if (e.target.id == "black") {
            body.style.backgroundColor = e.target.id
        }

        if (e.target.id == "blue") {
            body.style.backgroundColor = e.target.id
        }

        if (e.target.id == "yellow") {
            body.style.backgroundColor = e.target.id
        }


    })

})




