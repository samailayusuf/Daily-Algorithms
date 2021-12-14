function getCount(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var strArray = str.split('');
    var vowelsCount = 0;
    
    for(let i=0; i<strArray.length; i++){
      if(vowels.includes(strArray[i])){
        vowelsCount += 1;
      }
    }
    
    return vowelsCount;
  }

  console.log(getCount('Yusuf Samaila'))