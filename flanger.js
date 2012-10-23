var Osc = require('../oscillators');

module.exports = function(shift, amp, freq, delay, osc){ // integer millseconds, float [0,1], float value, boolean, stringx
  
  shift = shift / 1e6 // convert to ns

  function flanger(shift, amp, freq, delay, osc){

    var f = flanger, flang;

    if (delay){

      this.time.start
      
    }

    else {}

    flang = f.Osc[f.osc](this.t - shift, flanger.freq || this.freq)
    flang *= f.amp
    

    this.sample -= flange 
    return this

  };

  f.Osc = Osc()
  f.shift = shift
  f.amp = amp
  f.freq = freq || this.freq
  f.delay = delay || false
  f.osc = osc ? osc.toLowerCase() : 'sine'

  return flanger

}
