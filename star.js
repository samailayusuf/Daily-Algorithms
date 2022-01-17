const check = (value) =>{
    [1,2,3,4,5].map((rate)=>{
        value +1 === rate + 0.5 ? console.log('🌓') : value >= rate ? console.log('🌕') : console.log('📪')
    })
}

check(2.5)

// if(value+1 ===rate +0.5){
//     console.log('half')
// }else if( value >= rate){
    
// }