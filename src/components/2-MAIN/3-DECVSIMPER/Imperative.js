// Write a function called double which takes in an array of numbers and returns a new array after doubling every item in that array – double([1,2,3]) // [2,4,6].
function double(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(arr[i] * 2);
  }
  return results;
}
// Write a function called add which takes in an array and returns the result of adding up every item in the array – add([1,2,3]) // 6
function add(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

// 3
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  btn.classList.toggle('highlight');
  btn.innerText === 'Add Highlight'
    ? (btn.innerText = 'remove Highlight')
    : (btn.innerText = 'Add Highlight');
});
