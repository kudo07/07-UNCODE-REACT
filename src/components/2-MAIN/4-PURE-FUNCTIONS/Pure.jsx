// const isPrime = (n) => {
//   if (n === 1) {
//     return false
//   }

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false
//     }
//   }

//   return true
// }
// when the output is predictable for the same number so whats the point of calling again and again
// we just need to store it into the cache

let primeCache = {
  1: false,
};
const isPrime = (n) => {
  if (typeof primeCache[n] === 'boolean') {
    return primeCache[n];
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      primeCache[n] = false;
      return false;
    }
  }
  primeCache[n] = true;
  return true;
};
export default isPrime;
import isPrime from './isPrime';

isPrime(997); // true
isPrime(997); // true (from cache)
isPrime(997); // true (from cache)
