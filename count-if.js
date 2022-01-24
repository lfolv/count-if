function countIf(list, fn) {
  return list.reduce((count, value) => {
    if (fn(value)) {
      return count + 1
    }

    return count
  }, 0)
}

module.exports = countIf