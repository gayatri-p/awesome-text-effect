const awesomeEffect = (dict) => {
    let container = document.getElementById(dict.id)
    let randomChars = ''
    let text = dict.text
    let possible = (dict.possible) ? dict.possible : 'ABCDEFASIRUWJFCKSJHYWRKJEsdfskdjfk-+*/|}{[]~\\":;?/.><=+-_)(*&^%$#@!)}'
    let delay = dict.delay ? dict.delay : 70

    const generateRandomTitle = (i, randomChars) => {
        setTimeout(_ => {
            container.innerText = randomChars
        }, i * delay)
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
