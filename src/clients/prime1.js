import chalk from "chalk"

class PrimeLastDigit{
  lastDigitIs1(prime){
    if(prime % 10 === 1) console.log(chalk.red(prime))
  }
}

export default PrimeLastDigit