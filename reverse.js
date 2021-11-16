function spinWords(string){

    const textArray = string.split(' ')
    let resultArray = []
    
    for (let i=0; i < textArray.length; i++){
      const element = textArray[i]
      if(element.length >= 5){
        resultArray.push(element.split('').reverse().join(''))
        console.log(textArray[i])
      }else{
        resultArray.push(element)  
      }
      
    }
    
    return resultArray.join(' ')
      
    
    
  }

  const test = spinWords("yusuf is a good boy")

  console.log(test)

  /* Alternative solution from codewars

  function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

*/