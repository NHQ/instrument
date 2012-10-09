paper.install(window);

var canvas = document.getElementById('canvas');

window.onload = init

function init(){
  paper.setup('canvas');
  view.setViewSize(window.innerWidth * .50,200);
  var h = view.bounds.height;
  var w = view.bounds.width;
  var size = 4096/4;
  var waveTable = new Array(size);
  var count = view.bounds.width / size;
  for (var x = 0; x < size; x++){
    var c = new Path.Circle([x * count, h/2], 1);
    c.fillColor = '#000';
    waveTable[x] = c;
  }; 
  var xline = new Path.Line([0,h/2], [w,  h/2]);
  xline.strokeColor = 'red';
  xline.strokeWidth = .25;
  var tool = new Tool();
  tool.onMouseDrag = mDrag;
  tool.onMouseDown = mDown;
  view.draw();
  var slope, lastPoint, point, slice, start, send;
    function mDrag(e){
	slope = (e.point.y - e.lastPoint.y) / (e.point.x - e.lastPoint.x);
	start = e.lastPoint.x; end = e.point.x;
	if(e.lastPoint.x > e.point.x) {start = e.point.x; end = e.lastPoint.x};
	slice = waveTable.slice(start/count, end/count);
	slice.forEach(function(point){
	   point.position.y = -((-slope) * (point.position.x - e.point.x)) + e.point.y  
	});
//	waveTable[e.point.x].position = e.point;
	view.draw()
    }

    function mDown(e){
//	waveTable[e.point.x].position = e.point;
    }
};
