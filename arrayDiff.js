function arrayDiff(a, b) {  
  let output = []
  
  for (let i=0; i<b.length; i++){
    for(let j=0; j<a.length; j++){
      if(!(b[i] === a[j])){
        output.push(a[j]);
      }
    }
  }
  return [... new Set(output)];
}
