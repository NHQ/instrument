var B = require('baudio');
var b = B();
f = 75;
f1 = 75 * 3;
s = 0.5;

module.exports = function(freq, amp){
	return new oz(freq, amp)
};

function oz(f, a){
	this.f = f;
	this.a = a;
}



function sine(t){
		
	return Math.sin(t * f * Math.PI);
	
};

function saw (t){

	var n = ((t % (1/f)) * f) % 1; // n = [0 -> 1]

	return -1 + (2 * n)

};

function saw_b (t){

	var n = ((t % (1/f)) * f) % 1; // n = [0 -> 1]

	return 1 - (2 * n)

};

function triangle (t){
		
	var n = ((t % (1/f)) * f) % 1; // n = [0 -> 1]
	
	return n < 0.5 ? -1 + (2 * (2 * n)) : 1 - (2 * (2 * n))
	
};

function triangle_s (t){
		
	var n = ((t % (1/f)) * f) % 1; // n = [0 -> 1]
	
	s = Math.abs(Math.sin(t));
	
	return n < s ? -1 + (2 * (2 * (n / s))) : 1 - (2 * (2 * (n / s)))
	
};

function square (t){

  return ((t % (1/f)) * f) % 1 > 0.5 ? 1 : -1;

};

b.push(square)
b.play();