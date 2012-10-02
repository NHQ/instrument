var ps = require('pause-stream');
var fs = require('fs');
function play(stream){
var spawn = require('child_process').spawn;
function play(stream){
  var p = spawn('play', ['-n', '-t', 's16', '-r', '44100', '-c', '2']);
  stream.pipe(p);
  stream.resume();
  };
