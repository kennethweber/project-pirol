// Project Pirol - The 3D-printed digital cuckoo clock
// Copyright (C) 2020  Kenneth Weber - https://github.com/kennethweber

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

//functions

//Adding a zero in front for values smaller than 10
function addZero(n){
	if(n < 10){
		n = "0" + n;
	} 
	return n;
}

//Display current date and time
function displayDateAndTime(){
	var getDate = new Date();

	var h = addZero(getDate.getHours()); // 0 - 23
	var m = addZero(getDate.getMinutes()); // 0 - 59
	var s = addZero(getDate.getSeconds()); // 0 - 59

	var clock = h + ':' + m + ':' + s;

	document.getElementById("h").innerHTML = h;
	document.getElementById("m").innerHTML = m;
	document.getElementById("s").innerHTML = s;


	if(m == '00' && s == '00') {
		playBirdSound();
		console.log('playBirdSound() started');
	}

	console.log('Min' + m + 'sek' + s ); 


	//Display current date
	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

	var w = weekday[getDate.getDay()];
	var d = addZero(getDate.getDate());
	var m = addZero(getDate.getMonth()+1);
	var y = getDate.getFullYear();

	var date = w + ', ' + d + '.' + m + '.' + y;

	document.getElementById("date").innerHTML = date;


	setTimeout(displayDateAndTime, 1000);
}

displayDateAndTime();

//play bird sound
function playBirdSound() {
  var audio = new Audio('sounds/416529__inspectorj__bird-whistling-single-robin-a.mp3');
  audio.play();
}
