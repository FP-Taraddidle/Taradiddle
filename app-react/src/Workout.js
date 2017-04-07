import React, { Component } from 'react'

class Workout extends Component {
//     constructor (){
//         super()
//         this.state  = {             
//             mins: '',
//             secs: '',
//             tenths: '', 
//             exercise: '',
//             time: '',
//             running: '',
//             increment: '',
//             timer: document.querySelector("output")
//         }
//     }    
//     componentDidMount (){
        
//     }

//     startPause(){
//     if(running === 0){
// 		running = 1;
//         increment();
//         document.querySelector("start").innerHTML = "Pause";
//         document.querySelector("startPause").style.backgroundColor = "red";	
//         document.querySelector("startPause").style.borderColor = "red";
//         document.querySelector("startPause").style.borderColor = "red";
//         } 
//     else if (running === 1) {
// 		running = 0;
//         document.querySelector("start").innerHTML = "Resume";	
//         document.querySelector("startPause").style.backgroundColor = "green";	
//         document.querySelector("startPause").style.borderColor = "green";
//         setTimeout(reset, 15000);
//         }
// }

// // document.querySelector('#startPause').addEventListener('dblclick', function reset(){
// //     running = 0;
// // 	time = 0;
// // 	document.querySelector("start").innerHTML = "Start";
// // 	document.querySelector("output").innerHTML = "00:00";
// // 	document.querySelector("startPause").style.backgroundColor = "green";	
// // 	document.querySelector("startPause").style.borderColor = "green";
// // });

// increment(){
// 	if(running === 1){
// 		setTimeout(function(){
// 			secs--;
//             // colorChange();
// 			// var mins = Math.floor(time/10/60);
// 			// var secs = Math.floor(time/10 % 60);
// 			// var tenths = time % 10;
// 			// if(mins < 10){
// 			// 	mins = "0" + mins;
// 			// } 
// 			// if(secs < 10){
// 			// 	secs = "0" + secs;
// 			// }
// 			if (secs <= 0) {
// 				secs = 59
// 				mins--
// 			}
// 			document.querySelector("output").innerHTML = mins + ":" + secs;
// 			increment();
// 		},1000);
// 	}
// }

// reset(e){
//     if (document.querySelector("start") === "Resume")
//     running = 0;
// 	time = 0;
// 	document.querySelector("start").innerHTML = "Start";
// 	document.querySelector("output").innerHTML = "00:00";
// 	document.querySelector("startPause").style.backgroundColor = "green";	
// 	document.querySelector("startPause").style.borderColor = "green";
//     document.querySelector("output").style.color = "black";
// }

  render() {
    return <div className="columns is-multiline is-gapless is-mobile">
            <div className="column is-4 square1">
                <div className="container">
                    <h1><p id="output"><b>12:00:00</b></p></h1>
                    <div id="controls">
	                    <button id="startPause" onclick="startPause()"><b id="start">Start</b></button>
                    </div>
                </div>
            </div>
            <div className="column is-8 square2">
                <img className="is-mobile workoutImage" src="http://unsplash.it/200/200random?" />
                <img className="workoutImage" src="http://unsplash.it/200/200random?" />
            </div>
            <div className="column is-4 square3">
                <div className="container">
                    <h1><p id="output"><b>04:00:00</b></p></h1>
                    <div id="controls">
	                    <button id="startPause" onclick="startPause()"><b id="start">Start</b></button>
                    </div>
                </div>
            </div>
            <div className="column is-8 square4">4</div>
        </div>
  }
}

export default Workout