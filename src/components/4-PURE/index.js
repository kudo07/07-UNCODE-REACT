const freinds = ['ben', 'lynn', 'alexa'];
freinds.splice(0, 1); //ben
freinds.splice(0, 1); //lynn
freinds.splice(0, 1); //a;exa

Math.random(); // 0.9511513628376609
Math.random(); // 0.6547771399705873

Date.now(); // 1665072516384
Date.now(); // 1665072525093

const friends = ['Ben', 'Lynn', 'Alex'];
friends.push('Jeff'); // 4
friends.push('Jeff'); // 5
// if a function given the same input doen't consistently return the same output its also unpredicatable
// but slice is predictable
friends.slice(0, 1); //ben
friends.slice(0, 1); //ben
friends.slice(0, 1); //ben
//
function getGithubProfile(username) {
  return fetch(`https://api.github.com/users/${username}`).then((res) =>
    res.json()
  );
}
// we already know it's unpredicatable because its breaks the rule #1 but beyond that its even more unpredicatable because give the same input it will return an inconsistent output even if everything goes right
// the promise we get back from getgithubprofile is different for each invocation
const p1 = getGithubProfile('tylermcginnis');
const p2 = getGithubProfile('tylermcginnis');

p1 === p2; // false

// and wrose if something does go wrong there are a variety of other things that arent the users profile that might get returned
// Rule #2
// Consistent Outputs
// fucntions that follow our rules will makew them more predictable and therefore less susceptible to AudioBufferSourceNode.
// there are other non-obivious benifits as well
// COMPOSABLE
// because these functions dont depend on the contxt of the application and insted receive their inputs via explicit arguments they are entirely program agnostic and therefore extremely
// composable and reusable

// you can take these function and compose them into or reuse them in any application and they'll just work

// CACHEABLE
// because these functions always return the same output given a certain input, the result can be cached. there's no use in calliing these fcuntions more than once given the same inout since the output will alwys be the same

// const isPrime = (n) => {
//   if (n === 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
// the function is entirelu predictable ir doesnt contain any side effects and give the sameinpout it'll
// always return the same output
let primeCache = {
  1: false,
};
const isPrime = (n) => {
  if (typeof primeCache[n] === 'boolean') {
    return primeCache[n];
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      primeCache[n] = false;
      return false;
    }
  }
  primeCache[n] = true;
  return true;
};
import isPrime from './isPrime';

isPrime(997); // true
isPrime(997); // true (from cache)
isPrime(997); // true (from cache)
// by embaracing and striving to keep your functions pure you'll naturally increase the predictabbility if your program while minimising the abount of bug it has
