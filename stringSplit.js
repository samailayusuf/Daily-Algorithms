function solution(str){
   let stringArray = str.split('')
   let outputArray = []

   for (let i=0; i<stringArray.length; i+2){
       outputArray.push(stringArray[i] + stringArray[i-1])
   }
  return outputArray

}


console.log(solution('qwerty'));
