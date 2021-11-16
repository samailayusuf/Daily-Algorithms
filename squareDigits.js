function squareDigits(num){
    let result = ""
    const number = num.toString()
    
    for (let i=0; i<number.length; i++){
      result += (Math.pow(number[i], 2)).toString()
    }
    return parseInt(result);
  }
 console.log(squareDigits(3212))  