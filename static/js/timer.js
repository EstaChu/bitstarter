// 
// Add clearInterval && setInterval for hour/min/sec timer
//


var counter = setInterval(timeCalc, 1000);
// window.onload = timeCalc;

function timeCalc(){
  // UNIX time 2 UTF
  var actTime = new Date().getTime();
  // var expTime = new Date(2013, 8, 25, 00, 03, 10).getTime();
  var expTime = new Date(2013, 7, 9, 00, 03, 10).getTime();
  var diffTime = Math.abs(Math.floor((actTime - expTime)/1000));

  var days = calculateUnit(diffTime, 86400);
  var hours = calculateUnit((diffTime - (days * 86400)), 3600);
  var mins = calculateUnit((diffTime - (days * 86400) - (hours * 3600)), 60);
  var secs = calculateUnit((diffTime - (days * 86400) - (hours * 3600) - (mins * 60)), 1);

  // Adding spelling correctness
  var hour = (hours<10?'0'+hours:hours) + ':' + (mins<10?'0'+mins:mins) + ':' + (secs<10?'0'+secs:secs);
  // var hour = hours+':'+mins+':'+secs;


  return timePrint(diffTime, days, hour);
};

function calculateUnit(diffTime, unitSeconds){
  var tmp = Math.abs((tmp = diffTime / unitSeconds)) < 1 ? 0 : tmp;
  return Math.abs(tmp < 0 ? Math.ceil(tmp) :  Math.floor(tmp));
}

function timePrint(dt, d, h){
  console.log('Debug ====>> ' + dt, d, h);
  // Time formatting and 
  if(dt > 518400){
    document.getElementById('time').innerHTML = d;
    document.getElementById('tStr').innerHTML = 'days left';
  }else{
    // clearInterval(counter);
    // var counter = setInterval(timeCalc, 1000);
    document.getElementById('time').innerHTML = h;
    document.getElementById('tStr').innerHTML = 'hours left';
  }
};