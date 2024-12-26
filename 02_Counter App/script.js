const count = document.querySelector(".count")

const plusBtn = document.querySelector(".plus_btn")

const minusBtn = document.querySelector(".minus_btn")

const changeBy = document.querySelector(".changeBy")


plusBtn.addEventListener("click", (e) => {

    const countValue = parseInt(count.innerText)

    const changeByValue = parseInt(changeBy.value);

    count.innerText = countValue + changeByValue

})

minusBtn.addEventListener("click", (e) => {

    const countValue = parseInt(count.innerText)

    const changeByValue = parseInt(changeBy.value);

    count.innerText = countValue - changeByValue
})

const resetBtn = () => {
    count.innerText = 0
}