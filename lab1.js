
var gl;
var points;

var bufferId1, bufferId2, bufferId3;
var vPosition1, vPosition2, vPosition3;
    
var vertices1 = [vec2( -0.5, -1.0), vec2(  -1.0,  0.0 ), vec2(  0.0, 1.0 ), vec2( 1.0, 0.0), vec2( 0.5, -1.0)];
var vertices2 = [ vec2( -1.0, -1.0 ), vec2(  0.0,  1.0 ), vec2(  1.0, -1.0 ),];
var vertices3 = [ vec2( -1.0, -1.0 ), vec2(  -1.0,  1.0 ),  vec2(  1.0, 1.0 ), vec2( 1.0, -1.0)];

var program;

var count = 1;

window.onload = function init()
{
    var canvas = document.getElementById( "gl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }
	
	

    //
    //  Configure WebGL
    //
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
    
    //  Load shaders and initialize attribute buffers
    
    program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );
    
    // Load the data into the GPU
	
	bufferId1 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId1 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices1), gl.STATIC_DRAW );

    // Associate our shader variables with our data buffer
	
	vPosition1 = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition1, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition1 );
	
	// Load the data into the GPU
	
	bufferId2 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId2 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices2), gl.STATIC_DRAW );

    // Associate our shader variables with our data buffer
	
	vPosition2 = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition2, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition2 );
	
	// Load the data into the GPU
	
	bufferId3 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId3 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices3), gl.STATIC_DRAW );

    // Associate our shader variables with our data buffer
	
	vPosition3 = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition3, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition3 );

    render();
	
	canvas.onmousedown = function(ev) {draw()};
};

function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );

	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId1 );
    gl.vertexAttribPointer( vPosition1, 2, gl.FLOAT, false, 0, 0 );
	gl.drawArrays( gl.TRIANGLE_FAN, 0, 5 );
}

function draw()
{
	if(count == 1)
	{
		gl.bindBuffer( gl.ARRAY_BUFFER, bufferId2 );
   		gl.vertexAttribPointer( vPosition1, 2, gl.FLOAT, false, 0, 0 );
		gl.drawArrays( gl.TRIANGLE_FAN, 0, 3 );
	}
	
	if(count == 2)
	{
		gl.bindBuffer( gl.ARRAY_BUFFER, bufferId3 );
    	gl.vertexAttribPointer( vPosition1, 2, gl.FLOAT, false, 0, 0 );
		gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );
	}
	
	if(count == 3)
	{
		gl.bindBuffer( gl.ARRAY_BUFFER, bufferId1 );
    	gl.vertexAttribPointer( vPosition1, 2, gl.FLOAT, false, 0, 0 );
		gl.drawArrays( gl.TRIANGLE_FAN, 0, 5 );
	}
	
	if(count == 4)
	{
		gl.bindBuffer( gl.ARRAY_BUFFER, bufferId2 );
   		gl.vertexAttribPointer( vPosition1, 2, gl.FLOAT, false, 0, 0 );
		gl.drawArrays( gl.TRIANGLE_FAN, 0, 3 );
		
		count = 1;
	}
	
	count = count + 1;
}
