const awesomeEffect = (id, text) => {
    let container = document.getElementById(id)
    let randomChars = ''
    let possible = '-+*/|}{[]~\\":;?/.><=+-_)(*&^%$#@!)}'

    const generateRandomTitle = (i, randomChars) => {
        setTimeout(_ => {
            container.innerText = randomChars
        }, i * 70)
    }

    for (let i = 0; i < text.length + 1; i++) {
        randomChars = text.substr(0, i);
        for (let j = i; j < text.length; j++) {
            randomChars += possible.charAt(
                Math.floor(Math.random() * possible.length)
            )
        }
        generateRandomTitle(i, randomChars);
        randomChars = ''
    }
}
