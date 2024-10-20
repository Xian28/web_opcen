export const scrollIntoInvalidInput = (inputID) => {
    document.getElementById(inputID).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    })
}