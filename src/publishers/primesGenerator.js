import Event from '../common/myEvent.js'

class Generator extends Event{
    
    generatePrimes(number, currentNumber = 3) {
        if (number === currentNumber ) return
        if (number === 2) this.emit('start', number)
        if (number > 2){
          if(this.isPrime(currentNumber)){
            this.emit('start', currentNumber)
            setTimeout(() =>
            this.generatePrimes(number, currentNumber+1), 1000)
          }
          else this.generatePrimes(number, currentNumber+1)
        }
      
    }
    
    isPrime(j) {
        for(let i = 2; i < (j/2 + 1); i++){
          if(j % i === 0) return false
          if(i > j/2) return true
        }
    }

}

export default Generator

/* for(let j = 3; j <= number; j++){
  if(this.isPrime(j)){
    yield j
    this.emit('start', j)
  }
} */