const groupGrade = array => {
    //to return {failed:0, passed:5, exceptional:10} kind of object
    /*                          Criteria
    Below 50:failed
    From 50 - 89:passed
    From 90 - 100:exceptional
    */
   let result = {
       failed:0,
       passed:0,
       exceptional:0
   }

   for(let i=0; i<array.length; i++){

    let element = array[i]
    //console.log(element)
       
        if (element > 0 && element < 50){
            result.failed += 1;
        }else if(element >= 50 && element < 90){
           result.passed += 1;
        }else if(element >= 90 && element <= 100){
          result.exceptional += 1;
        }

    }
   

   return result
}

const check = groupGrade ([12,1,56,50,59,90,100])

console.log(check) // { failed: 2, passed: 3, exceptional: 2 }