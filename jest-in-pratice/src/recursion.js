'use strict'

const sum = (arr) => {
  if (arr.length === 0)
    return 0

  return arr[0] + sum(arr.slice(1))
}

const sum2 = (arr) => {
  if (arr.length === 0)
    return 0

  const [head, ...tail] = arr
  return head + sum2(tail)
}

const sum3 = (arr) => {

  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum
}

console.time()
console.log('Função 1 => ', sum([1, 2, 3, 4, 5]))
console.timeEnd()

console.time()
console.log('Função 2 => ', sum2([1, 2, 3, 4, 5]))
console.timeEnd()

console.time()
console.log('Função 3 => ', sum3([1, 2, 3, 4, 5]))
console.timeEnd()
