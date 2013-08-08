/*
* 
* JS countdown Timer
* By José Florian González Krause
* Licensed under MIT
*
*/

function timeCalc(){
  // UNIX time 2 UTF
  var actTime = new Date().getTime();
  var expTime = new Date(2013, 8, 25, 00, 03, 10).getTime();
  // var expTime = new Date(2013, 7, 9, 00, 03, 10).getTime();
  var diffTime = Math.abs(Math.floor((actTime - expTime)/1000));

  var days = calculateUnit(diffTime, 86400);
  var hours = calculateUnit((diffTime - (days * 86400)), 3600);
  var mins = calculateUnit((diffTime - (days * 86400) - (hours * 3600)), 60);
  var secs = calculateUnit((diffTime - (days * 86400) - (hours * 3600) - (mins * 60)), 1);
  // Adding spelling correction
  var hour = hours + ':' + (mins<10?'0'+mins:mins) + ':' + (secs<10?'0'+secs:secs);
  // var hour = hours+':'+mins+':'+secs;
  return timePrint(diffTime, days, hour);
};

function calculateUnit(diffTime, unitSeconds){
  // Time unit casting.
  var tmp = Math.abs((tmp = diffTime / unitSeconds)) < 1 ? 0 : tmp;
  return Math.abs(tmp < 0 ? Math.ceil(tmp) :  Math.floor(tmp));
};

function timePrint(dt, d, h){
  // Time DOM insertion.
  // console.log('Debug ====>> ' + dt, d, h); 
  if(dt > 518400){
    document.getElementById('time').innerHTML = d;
    document.getElementById('tStr').innerHTML = 'days left';
  }else{
    // clearInterval(counter);
    // var counter = setInterval(timeCalc, 1000);
    document.getElementById('time').innerHTML = h;
    document.getElementById('tStr').innerHTML = 'hours left';
  };
};

var counter = setInterval(timeCalc, 1000);