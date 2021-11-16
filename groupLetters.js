const groupLetters = text => {
    const vowels = ['a', 'i', 'o', 'u', 'e', 'A', 'I', 'O', 'U', 'E']
    let vowelLetters = []
    let consonantLetters = []
    let textArray = text.split('')

    for (let i = 0; i < textArray.length; i++){
        element = textArray[i]

        if (vowels.includes(element)){
            vowelLetters.push(element)
        }else{
            consonantLetters.push(element)
        }
    }
    //console.log(vowelLetters +": "+ consonantLetters)
    const result = vowelLetters.join('') + consonantLetters.join('')

    return result
}

let test = groupLetters("Nigeria")

console.log(test) //ieiaNgr