var time = 0;
var running = 0;
var min = 4;
var sec = 0;
var reset;
var timer = document.querySelector("output");

function startPause(){
        if(running === 0){
		running = 1;
        increment();
	document.getElementById("start").innerHTML = "Pause";
	document.getElementById("startPause").style.backgroundColor = "red";	
	document.getElementById("startPause").style.borderColor = "red";
    document.getElementById("startPause").style.borderColor = "red";
    }
	else if (running === 1) {
		running = 0;
	document.getElementById("start").innerHTML = "Resume";	
	document.getElementById("startPause").style.backgroundColor = "green";	
	document.getElementById("startPause").style.borderColor = "green";
    setTimeout(reset, 15000);
    }
}

document.querySelector('#startPause').addEventListener('dblclick', function reset(){
    running = 0;
	time = 0;
	document.getElementById("start").innerHTML = "Start";
	document.getElementById("output").innerHTML = "00:00:00";
	document.getElementById("startPause").style.backgroundColor = "green";	
	document.getElementById("startPause").style.borderColor = "green";
});

// function colorChange() {
//         var red = Math.round(Math.random() * 255);
//         var green = Math.round(Math.random() * 255);
//         var blue = Math.round(Math.random() * 255);
//         document.getElementById("output").style.color = `rgb(${red}, ${green}, ${blue})`;
// }

function increment(){
	if(running == 1){
		setTimeout(function(){
			sec--;
			// var mins = Math.floor(time/10/60);
			// var secs = Math.floor(time/10 % 60);
			// var tenths = time % 10;
			// if(mins < 10){
			// 	mins = "0" + mins;
			// } 
			// if(secs < 10){
			// 	secs = "0" + secs;
			// }
			if (sec <= 0) {
				sec = 59
				min--
			}
			document.getElementById("output").innerHTML = min + ":" + sec + ":";
			increment();
		},100);
	}
}

function reset(e){
    if (document.querySelector("start") === "Resume")
    running = 0;
	time = 0;
	document.getElementById("start").innerHTML = "Start";
	document.getElementById("output").innerHTML = "00:00:00";
	document.getElementById("startPause").style.backgroundColor = "green";	
	document.getElementById("startPause").style.borderColor = "green";
    document.getElementById("output").style.color = "black";
}