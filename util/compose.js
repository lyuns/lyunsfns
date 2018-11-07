/*
 * 函数组合
 */
// const compose = (f, g) => x => f(g(x))

/*
 * 多函数组合
 */
const composeX = (...args) => {
    return x => {
        let prev = x
        for(let i=args.length-1; i>=0; i--){
            prev = args[i](prev)
        }
        return prev;
    }
}

let toUpper = x => x.toUpperCase()
let addShot = x => x + '...'

let upperShot = composeX(toUpper, addShot)