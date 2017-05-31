// Create function to get the time
function theTime(){
  var newDate = new Date();
// gets time realtime
  var hours = newDate.getHours();
  var minutes = newDate.getMinutes();
  var seconds = newDate.getSeconds();

// if the hours are greater than 12 then it will display PM, if less then it will display AM
  var ampm = " PM ";
  if (hours < 12){
    ampm = " AM ";
  }

// non-military time
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0){
    hours = 12;
  }

  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

// Inputs the function to display time in the html div
  document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds + ampm;
// starts the time(function)
  var start = setTimeout(theTime);
}

// Adds 0 to the seconds and minutes if it's less than 10, puts a 0 infront of whole number (01,02,03)
function checkTime(i){
  if (i < 10) { i = "0" + i}
  return i;
}

// running the function above to get the time to display
theTime();
