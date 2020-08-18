let kw = 0;
let ow = 0;
for (let a = 0; a < 1000000; a++) {
	let ball = Math.floor(Math.random() * 3);
	let choose = Math.floor(Math.random() * 3);

	let reverse = [0, 1, 2];
	reverse = reverse.filter(x => x !== ball);
	reverse = reverse.filter(x => x !== choose);
	reverse = reverse[Math.floor(Math.random() * reverse.length)];
	assert(reverse !== ball);
	assert(reverse !== choose);

	let other = [0, 1, 2];
	other = other.filter(x => x !== choose);
	other = other.filter(x => x !== reverse);
	assert(other.length === 1);
	other = other[0];

	if (choose === ball) {
		kw++;
	} else if (other === ball) {
		ow++;
	} else {
		assert(false);
	}
}
let aw = kw + ow;
console.log('Keep strategy wins:', kw / aw * 100, '%');
console.log('Other strategy wins:', ow / aw * 100, '%');
