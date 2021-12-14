function DNAStrand(dna){
    //your code here
    var dnaStr = dna.split('')
    console.log(dnaStr)
    
    for (let i=0; i<dnaStr.length; i++){
      if(dnaStr[i] === "A"){
        dnaStr[i] = "T"
      }else if(dna[i] === "T"){
        dnaStr[i] = "A"
      }else if (dna[i] === "C"){
        dnaStr[i]="G"
      }else if(dna[i] === "G"){
        dnaStr[i]="C"
      }
      
    }
    return dnaStr.join('');
  }

  console.log(DNAStrand('GTAT'))