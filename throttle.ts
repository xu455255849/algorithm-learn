function debounce(fn, timeout) {
  let lastTime = 0

  return function (...args) {
    const now = Date.now()
    if (now - lastTime > timeout) {
      lastTime = now
      fn(...args)
    }
  }
}


const run =  debounce((name = 'xu', age = 29) => {
  console.log(name, age)
}, 1500)


for (let i = 0; i < 10; i ++) {
  run()
}