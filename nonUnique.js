const findNonUnique = array => {
    const sortedArray = array.slice().sort()

    let duplicates = []

    for(let i=0; i<sortedArray.length; i++){
        if (sortedArray[i] === sortedArray[i+1]){
            if(! duplicates.includes(sortedArray[i])){
                duplicates.push(sortedArray[i])
            }
        }
    }

    return (duplicates)
}

const test = findNonUnique([1,2,2,2,3,4,5,6,7,8,9,0,0,0])

console.log(test) // [ 0, 2 ]