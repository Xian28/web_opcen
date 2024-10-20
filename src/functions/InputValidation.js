export const inputValidation = (
    condition,
    errorVariable,
    helperVariable,
    helperText
) => {
    var result = ''
    if(condition){
        errorVariable(true)
        helperVariable(helperText)
        result = 'invalid'
    }
    else{
        errorVariable(false)
        helperVariable(' ')
        result = 'valid'
    }

    return result
}