const generateBtn = document.querySelector('.generate-button')
const memeTitle = document.querySelector('.meme-title')
const memeImage = document.querySelector('.meme-image')
const authorOutput = document.querySelector('.author')


const getMeme = async () => {

    try {
        const response = await fetch('https://meme-api.com/gimme/wholesomememes')

        const data = await response.json()

        const { author, title, url } = data

        memeTitle.innerText = title

        authorOutput.innerText = `Meme by ${author}`

        memeImage.src = url

    } catch (error) {
        console.log(error);

    }
}

getMeme()


generateBtn.addEventListener('click', () => {
    getMeme()
})



