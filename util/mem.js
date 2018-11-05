/*
 * 纯函数 缓存
*/
let mem = (fn) => {
	let _cache = {}

	return (...args) => {
		let arg_str = args.join(':')
		_cache[arg_str] = _cache[arg_str] || fn.apply(fn, args);
		return _cache[arg_str]
	}
}

let add = mem((a, b) => {
	console.log('计算中...')
	return a + b;
})