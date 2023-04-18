function debounce(fn, timeout) {
  let timer = null

  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, timeout)
  }
}


const run =  debounce((name = 'xu', age = 29) => {
  console.log(name, age)
}, 1500)


for (let i = 0; i < 10; i ++) {
  run()
}