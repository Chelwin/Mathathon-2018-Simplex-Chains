

// Make an instance of two and place it on the page.
var elem = document.getElementById('visualsection');

var TARGET_X = 0;
var TARGET_Y = 0;

var params = { width: 1000, height: 1000 };
var two = new Two(params).appendTo(elem);

function createGrid(s) {

    var size = s || 30;

    for(var j = -s; j < s; j++) {
    var x0 = -s;
    var y0 = j;
    var x1 = s;
    var y1 = j;

    var p0 = transform_to_viewport(new THREE.Vector2(x0,y0));
    var p1 = transform_to_viewport(new THREE.Vector2(x1,y1));
    var a = two.makeLine(p0[0], p0[1], p1[0], p1[1]);
    a.stroke = '#6dcff6';
    }

    for(var j = -s; j < s; j++) {
    var x0 = j;
    var y0 = s;
    
    var x1 = j+s;
    var y1 = -s;

    var p0 = transform_to_viewport(new THREE.Vector2(x0,y0));
    var p1 = transform_to_viewport(new THREE.Vector2(x1,y1));
    var a = two.makeLine(p0[0], p0[1], p1[0], p1[1]);
    a.stroke = '#6dcff6';

    var x1 = j+-s;
    
    var p1 = transform_to_viewport(new THREE.Vector2(x1,y1));
    var a = two.makeLine(p0[0], p0[1], p1[0], p1[1]);
    a.stroke = '#6dcff6';
    }

    two.update();
}

var w = 10.0;
var h = 10.0;


function createTrinagleGrid(s) {

    var size = s || 30;
    for(var i = -s; i < s; i++) {
    for(var j = -s; j < s; j++) {
        render_spot(i + (((j % 2) == 0) ? 0.0 : 0.5 ),
            j,
            'blue');
    }
    }
    two.update();
}



// Input is a THREE.Vector2, out put an [x,y] array...
function transform_to_viewport(pnt) {

    // Let's assume our play space is from -10 to + 10, centered on the origin...

    var x = pnt.x;
    var y = pnt.y;
    // first scale appropriately
    x = x * (params.width / (2 * w));
    y = y * (params.height / (2 * h));    
    // now move to origin....
    x += params.width/2;
    y = (-y) + params.height/2;

    // These adjust our weird grid background to the origin...
//    y = y + params.height / (2 *(2 * h));
//    x = x + params.width / (2 * (2 * w)) ;
    return [x,y];
}

function transform_from_viewport(x,y) {

        // now move to origin...
    x = x - (params.width)/2;
    y = y - (params.height)/2;

    
    // then unscale..
    x = x / (params.width / (2*w));
    y = - y / (params.height / (2*h));    


    
    return [x,y];
}

function test_transforms() {
    for(var x = -10; x < 10; x++) {
    for(var y = -10; y < 10; y++) {
        var p = transform_from_viewport(x,y);
        var v = new THREE.Vector2(p[0],p[1]);
        var r = transform_to_viewport(v);
        console.log(x,y);
        console.log(r);
        
//	    assert(r.x == x);
//	    assert(r.y == y);
    }
    }
}


function render_origin() {
    var origin = transform_to_viewport(new THREE.Vector2(0,0));
    var circle = two.makeCircle(origin[0], origin[1], 2);
    circle.fill = '#000000';
    circle.stroke = 'black'; // Accepts all valid css color
    circle.linewidth = 2;
}

function render_spot(x,y,color) {
    var pnt = transform_to_viewport(new THREE.Vector2(x,y));
    var circle = two.makeCircle(pnt[0], pnt[1], 3);
    circle.fill = color;
    circle.stroke = color; // Accepts all valid css color
    circle.linewidth = 2;
}


createGrid(params.width / (2 * 10.0));
createTrinagleGrid(30);
render_spot(0.0,0.0,'red');
two.update();

