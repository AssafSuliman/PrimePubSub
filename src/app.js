import Generator from './publishers/primesGenerator.js'
import Mersenne from './clients/mersenne.js'
import PrimeLastDigit from './clients/prime1.js'

const generator = new Generator()
const mersenne = new Mersenne()
const prime1 = new PrimeLastDigit()

generator.on('start', mersenne.checkIfMersenne)
generator.on('start', prime1.lastDigitIs1)

generator.generatePrimes(100)







