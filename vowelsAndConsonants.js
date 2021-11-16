const check = string => {
    const text = string.toLowerCase().split('')
    const vowels = [
        'a','i', 'o', 'u', 'e']

    //console.log(text)

    let teamVowels = 0;
    let teamConsonants = 0;
    let verdict = "";


    for (let i=0; i<text.length; i++){
        if (vowels.includes(text[i])){
            teamVowels++
        }else{
            teamConsonants++
        }
    }

    if(teamConsonants > teamVowels){
        verdict = "consonants win"
    }else if(teamVowels > teamConsonants){
        verdict = "vowels win"
    }else{
        verdict = "draw"
    }

    return verdict


}

let res = check('EEEEEEemployee')

console.log(res)