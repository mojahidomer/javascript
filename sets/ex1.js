const arr = [1, 2, 2, 3, 4, 4];

let dup = [...new Set(arr)]
console.log(dup)

let set = new Set(arr)
console.log(set.has(37))

console.log([...set])