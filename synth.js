var Oscillator = require('../oscillators/synth.osc')
//  , flanger = require('./flanger')
  , envelope = require('./envelopes')
  , Time = require('since-when')
;

module.exports = function(freq){

  freq = freq || 0;
  
  var synth = function(t, i, f){
    synth.sample = 1;
    synth.t = t;
    synth.f = f || synth.f;
    synth.i = i;
    return synth
  };

  synth.time = new Time()
  synth.f = freq;
  synth.type = 0;
  synth.sustain = false;
  synth.t = 0;
  synth.i = 0;
  
  var osc = synth.prototype.osc = Oscillator;

  synth.sine = osc.sine(freq);

  synth.square = osc.square(freq);
 
  synth.triangle = osc.triangle(freq);

  synth.saw = osc.saw(freq);

  synth.saw_i = osc.saw_i(freq);

  synth.triangle_s = osc.triangle_s(freq)

  synth.envelope = new envelope([1,1], [1,0], [1,1], [1,0]);

//  synth.flang = new flanger();

  return synth

}
