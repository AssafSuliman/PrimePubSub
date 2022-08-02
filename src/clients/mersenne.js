class Mersenne{
  
  checkIfMersenne(primeNum){
    let isMersenne = false
    for(let i = 1 ; (2**i -1) <= primeNum; i++){
      if(primeNum === (2**i -1)){
        isMersenne = true
      }
    }
    if(isMersenne){
      console.log(primeNum, 'is a mersenne number')
    }
  }
}

const mer = new Mersenne()

/* mer.checkIfMersenne(11) */

export default Mersenne