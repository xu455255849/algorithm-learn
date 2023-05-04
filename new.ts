
function Parent(name, age) {
  this.name = name;
  this.age = age;
}

function myNew(Fn, ...args) {
  const obj = Object.create(Fn.prototype)
  const res = Fn.apply(obj, args)
  return res instanceof Object ? res : obj
}

const demo = new Parent('xu', 19)

console.log(demo, myNew(Parent, 'xu', 18))
