var B = require('baudio');
var oz = require('oscillators');
var synco = require('syncopation');
b = B({rate:44100, size:2048});

o = new oz(100)

function gus (amp, x, b, c){
  b = b || 0;
  c = c || 1;

  var num = Math.pow((x - b), 2);

  var den = 2* Math.pow(2.35482 * c, 2);

  var v = amp * Math.pow(2.71828, (-(num / den)));

  return v

}

var sync = new synco(1, 6/9);

function play (t,i){
  var e = 4;
  var b = 2;
  var s = Math.pow(b, e);
  var f = 220;
  var z = o.sine(t, f); 
  var x = z * s;
  var y = z;

  while(x > z * (1 / s)){
    y *= gus(z, x);
    x *= (1 / b);
  }

  return y;

}


function play2(t,i){
  var e = 4/3;
  var b = 8/3;
  var s = Math.pow(b, e);

  var f = 55 * o.sine(t, 220);
  var y = o.triangle(t, f)

  var x = f;

  while(x >= f * (1 / s)){
    y = o.triangle(t, x);
    x *= (1 / b);
  }

  return y * .25;
}

// play * play2 = play3 (sorta)

function play3 (t,i){
  var e = 2;
  var b = 2;
  var s = Math.pow(b, e);

  var f = 110;
  var z = o.sine(t, f);
  var y = z; 
  var x = z * s;
  pl = 0;

  while(x > z * (1 / s)){
    x *= (1 / b);
    pl = gus(z, x, 0, 2);
    y *= o.sine(t, pl * f);
  }

  return y;

}

b.push(play3);
//b.push(play2);
//b.push(play);
b.play({c: 1})
