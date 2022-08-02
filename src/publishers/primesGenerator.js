import Event from '../common/myEvent.js'

class Generator extends Event{
    
    *generatePrimes(number) {
        if (number >= 2) yield 2
        for(let j = 3; j <= number; j++){
          if(this.isPrime(j)){
            yield j
          }
        }
    }
    
    isPrime(j) {
        for(let i = 2; i < (j/2 + 1); i++){
          if(j % i === 0) return false
          if(i > j/2) return true
        }
    }
}
const generator1 = new Generator()

for(let value of generator1.generatePrimes(11)){
  console.log(value)
}