'use strict'


const map = (arr = [], func = (item) => item) => {
  const counter = 0

  return (function mapInternal(arrayInternal, counter) {
    if (arrayInternal.length === 0)
      return []

    const [head, ...tail] = arrayInternal
    return [func(head, counter, arr)].concat(mapInternal(tail, counter + 1))
  })(arr, counter)
}

export default map