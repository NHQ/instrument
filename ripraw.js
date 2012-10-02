var tube_rip = require('youtube-dl')
  , spawn = require('child_process').spawn
;

module.exports = function(url, args){
	
	var dl = tube_rip.download(url, './videos', ['--max-quality=18', '--prefer-free-formats', '--extract-audio', '--audio-format', 'wav', '--audio-quality', '9']);

	// will be called when the download starts
	dl.on('download', function(data) {
	  console.log('Download started');
	  console.log('filename: ' + data.filename);
	  console.log('size: ' + data.size);
	});

	// will be called during download progress of a video
	dl.on('progress', function(data) {
	  process.stdout.write(data.eta + ' ' + data.percent + '% at ' + data.speed + '\r');
	});

	// catches any errors
	dl.on('error', function(err) {
	  throw err;
	});

	// called when youtube-dl finishes
	dl.on('end', function(data) {
	  console.log('\nDownload finished!');
	  console.log('Filename: ' + data.filename);
	  console.log('Size: ' + data.size);
	  console.log('Time Taken: ' + data.timeTaken);
	  console.log('Time Taken in ms: ' + data.timeTakenms);
	  console.log('Average Speed: ' + data.averageSpeed);
	  console.log('Average Speed in Bytes: ' + data.averageSpeedBytes);
	});
	
}