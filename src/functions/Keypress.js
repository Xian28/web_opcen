export const keyPress = (
    event,
    funct
) => {
    if (event.key === 'Enter') {
        funct()
    }
}