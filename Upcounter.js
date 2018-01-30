function upTime() {
  // Month,Day,Year,Hour,Minute,Second
  upTime('aug,11,2016,12:00:00'); // ****** Change this line!
};

function upTime(countTo) {
  var now = new Date(), countTo = new Date(countTo),
    years  = now.getFullYear()-countTo.getFullYear(),
    months = now.getMonth()   -countTo.getMonth(),
    days   = now.getDate()    -countTo.getDate(),
    hours  = now.getHours()   -countTo.getHours(),
    mins   = now.getMinutes() -countTo.getMinutes(),
    secs   = now.getSeconds() -countTo.getSeconds();
  if (months<0) {
    years--;
    months += 12;
  }
  if (days<0) {
    months--;
    var daysOfMonth = new Date(now.getTime())
    daysOfMonth.setMonth(now.getMonth()+1)
    daysOfMonth.setDate(0);
    days+=daysOfMonth.getDate();
  }
  if (hours<0) {
    days--;
    hours+=24;
  }
  if (mins<0) {
    hours--;
    mins+=60;
  }
  if (secs<0) {
    mins--;
    secs+=60;
  }
  if (months<0) months = 0;


  document.getElementById('years'  ).innerHTML = years;
  document.getElementById('months' ).innerHTML = months;
  document.getElementById('days'   ).innerHTML = days;
  document.getElementById('hours'  ).innerHTML = hours;
  document.getElementById('minutes').innerHTML = mins;
  document.getElementById('seconds').innerHTML = secs;

  clearTimeout(upTime.to);
  upTime.to = setTimeout(function() {
    upTime(countTo);
  }, 1000);
}
