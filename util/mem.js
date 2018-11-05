let mem = (fn) => {
	let _cache = {};

	return function() {
		let arg_str = JSON.stringify(arguments);
		_cache[arg_str] = _cache[arg_str] || fn.apply(fn, arguments);
		return _cache[arg_str];
	};
};

let add = mem((a, b) => {
	console.log('计算中...');
	return a + b;
});