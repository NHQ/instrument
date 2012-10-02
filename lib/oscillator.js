module.exports = function(freq){
	
	this.f = freq || throw new Error('you need a frequency to oscillate')
	
	this.sine = function(t){
		return Math.sin(t * this.f * Math.PI)
	}
	
	this.square  = function(t){
		return t % (1 / this.f) < (1 / (f / 2)) ? 1 : -1                                               
	}
	
	
	
}

                       