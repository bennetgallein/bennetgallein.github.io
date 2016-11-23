 var rjs =  new function () {

	this.randomInt = function(min, max) {
		return Math.floor(Math.random() * (max-min)) + min;
	};
	this.randomDec = function(min, max, decimals) {
		return (Math.random() * (max-min) + min).toFixed(decimals || 2); 
	};
	this.randomList = function(list) {
		var i =  list[rjs.randomInt(0, list.length)];
		return i;
	};
	this.randomPercent = function(decimals) {
		return rjs.randomDec(0, 100, decimals);
	};
	this.randomString = function(length) {
		var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		var text = "";
		for (var i = 0; i < length; i++) {
			text += chars.charAt(Math.random() * chars.length);
		} 
		return text;
	};
	this.randomBoolean = function() {
		return rndm = Math.random() >= 0.5;
	};
	this.randomUpLetter = function() {
		var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		return chars.charAt(Math.random() * chars.length);
	};
	this.randomLowLetter = function() {
		var chars = "abcdefghijklmnopqrstuvwxyz";
		return chars.charAt(Math.random() * chars.length);
	};
};
