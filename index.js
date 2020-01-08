function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let newArr;
  if (!A.length) return A;
  K = K % A.length;
  let arr1 = A.slice(-K);
  let arr2 = A.slice(0, -K);
  newArr = arr1.concat(...arr2);
  return newArr;
}