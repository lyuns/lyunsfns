const compose = (f, g) => x => f(g(x))

let toUpper = x => x.toUpperCase()
let addShot = x => x + '.'

let upperShot = compose(toUpper, addShot)