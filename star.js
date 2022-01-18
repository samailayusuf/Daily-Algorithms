const rate = (value) =>{
    [1,2,3,4,5].map((rate)=>{
        value +1 === rate + 0.5 ? console.log('Half') : value >= rate ? console.log('Full') : console.log('Empty')
    })
}

rate(2.5)

