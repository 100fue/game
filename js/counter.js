
// Define our selectors
var $clock 		= $("#clock");
var $timer 		= $("#timer");
var $start 		= $("#start");
var $pause 		= $("#pause");
var $continue 	= $("#continue");

// if($timer.css("display") === 'block'){
//     // $("#board").hide();
// }


// Enable start / pause / continue buttons
$(function(){
	$start.on("click",function(e){
		e.preventDefault();
		beginTimer(3000); // 30 seconds
		
		$start.hide();	
		$pause.show();	
	});
	
	$pause.on("click",function(e){
		e.preventDefault();
		clearTimeout(window.t);
		
		clockPause(1,true);
		
		$timer.addClass("half_opacity");
		$(this).hide();
		$continue.show();
	});
	
	$continue.on("click",function(e){
		e.preventDefault();
		$timer.removeClass("half_opacity");
		
		clockPause(1,false);
		
		// Restart clock once opacity has reversed
		setTimeout(function(){
			beginTimer(window.intOffset);
		},350);
		
		$(this).hide();
		$pause.show();
	});
	
	// Start clock face on page load
	beginTimer(3000);
});

// Change timer face colour
function colourChanger(intAngle)
{
	// RGB values
	// Green: 	 51 153  0
	// Orange:	244 138  0
	// Red:		255   0  0
	
	intAngle = 6.29 - intAngle;
	
	if(Math.floor(72+55*intAngle) < 255 || Math.floor(214+14*intAngle) < 255)
	{
		// Animate from green to amber
		return 'rgb(' + Math.floor(72+55*intAngle) + ',' + Math.floor(214+14*intAngle) + ',0)';	
	} else {
		// Animate from amber to red
		return 'rgb(' + Math.floor(255) + ',' + Math.floor(597-(90*intAngle)) + ',0)';
	}
}

// Get the ball rolling...
function beginTimer(timer)
{
	// Get our start time
	var dteStart = new Date();
	dteStart = dteStart.getTime();
	
	// Call countdown clock function
	countDownClock(dteStart,timer);
	
	// Reset elements to their defaults
	$clock.show();
	$timer.show();
}

// Build our countdown clock
function countDownClock(dteStart,timer)
{
	// Time started, minus time now, subtracked from 60 seconds
	var d = new Date();
	window.intOffset = timer - (d.getTime() - dteStart);
	
	// Whole number to use as countdown time
	$timer.html(Math.ceil(window.intOffset / 1000));
	
	// Angle to use, defined by 1 millisecond
	window.intAngle = 0.1048335*0.001*window.intOffset;
					
	// Set up our canvas
	var canvas = document.getElementById("clock");
	
	if (canvas.getContext) // Does the browser support canvas?
	{
		var ctx = canvas.getContext("2d");
		
		// Clear canvas before re-drawing
		ctx.clearRect(0,0,300,300);
		
		// Grey background ring
		ctx.beginPath();
		ctx.globalAlpha = 1;
		ctx.arc(150,150,140,0,6.283,false);
		ctx.arc(150,150,105,6.283,((Math.PI*2)),true);
		ctx.fillStyle = "#bbb";
		ctx.fill();
		ctx.closePath();
		
		// Clock face ring
		ctx.beginPath();
		ctx.globalAlpha = 1;
		ctx.arc(150,150,140.1,-1.57,(-1.57 + window.intAngle),false);
		ctx.arc(150,150,105,(-1.57 + window.intAngle),((Math.PI*2) -1.57),true);
		ctx.fillStyle = colourChanger(window.intAngle);
		ctx.fill();
		ctx.closePath();
		
		// Centre circle
		ctx.beginPath();
		ctx.arc(150,150,105,0,6.283,false);
		ctx.fillStyle = "#fff";
		ctx.fill();
		ctx.closePath();
		
	} else {
		// Put fallback for browsers that don't support canvas here...
	}
					
	if(window.intOffset <= 0) // If time is up
        timeUp();	
        
	else // Resersive ahoy!
		window.t = setTimeout("countDownClock(" + dteStart + "," + timer + ")",50);
}

// Pause clock and animate our centre circle
function clockPause(timeElapsed,pause)
{		
	// Duration of pause animation
	pauseTime = 100;
	
	diff = timeElapsed / pauseTime;
	
	if(pause) // Pause the clock
	{
		percentage = 1 - diff;
		if(percentage < 0)
			percentage = 0;
	} else { // Resume the clock
		percentage = diff;
		if(percentage > 1)
			percentage = 1;
	}				
						
	// Set up our canvas
	var canvas = document.getElementById("clock");
	
	if (canvas.getContext) // Does the browser support canvas?
	{
		var ctx = canvas.getContext("2d");
		
		// Clear canvas before re-drawing
		ctx.clearRect(0,0,300,300);
		
		// Grey background ring
		ctx.beginPath();
		ctx.globalAlpha = 1;
		ctx.arc(150,150,140,0,6.283,false);
		ctx.arc(150,150,105,6.283,((Math.PI*2)),true);
		ctx.fillStyle = "#bbb";
		ctx.fill();
		ctx.closePath();
		
		// Clock face ring
		ctx.beginPath();
		ctx.globalAlpha = 1;
		ctx.arc(150,150,140.1,-1.57,(-1.57 + window.intAngle),false);
		ctx.arc(150,150,105,(-1.57 + window.intAngle),((Math.PI*2) -1.57),true);
		ctx.fillStyle = colourChanger(window.intAngle);
		ctx.fill();
		ctx.closePath();
		
		// Centre circle
		ctx.beginPath();
		ctx.arc(150,150,(105 * percentage),0,6.283,false);
		ctx.fillStyle = "#fff";
		ctx.fill();
		ctx.closePath();
		
		// Recursive until time has elapsed
	// 	if(timeElapsed < pauseTime)
	// 	{
	// 		setTimeout(function(){
	// 			clockPause((timeElapsed + 10),pause);
	// 		},10);
	// 	}
	// } else {
		// Put fallback for browsers that don't support canvas here...
	}
}

// Time up - reset buttons
function timeUp()
{
	$start.show();	
	$pause.hide();	
    $continue.hide();
    setTimeout(() => alert("fin"), 1500/60);	
    
 
}

