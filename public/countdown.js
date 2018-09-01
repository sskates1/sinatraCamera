var countdownActive = false; // Global that stores whether countdown is active

function countdown(){
  var dfr = new $.Deferred();

  if (countdownActive){
    console.log("Already active");
    dfr.reject();
    return dfr.promise();
  }
  countdownActive = true; // Countdown in progress

  $('.instructions').css("display","none"); // Hide Instructions
  $('.countdown').css("display","block"); // Display overlay

  setTimeout(function() {
    var time = 5; /* how long the timer will run (seconds) */
    $('#ctext').text(time);
    var initialOffset = '440';
    var i = 1;
    /* Need initial run as interval hasn't yet occured... */
    $('.circle_animation').css('stroke-dashoffset', -1*(initialOffset/time));

      var interval = setInterval(function() {
          $('#ctext').text(time-i);
          if (i == 3) {
            $.get('http://172.24.1.1:8080/ctrl/focus')
          }
          if (i == time) {
            clearInterval(interval);
            //console.log("resolved");
            $('.countdown').css("display","none");
            $('.circle_animation').css('stroke-dashoffset',0);
            takePhoto();

            $('.instructions').css("display","block");
            countdownActive = false;

            return;
          }
          $('.circle_animation').css('stroke-dashoffset', -1*((i+1)*(initialOffset/time)));
          i++;
    }, 1000);
  }, 0);
  return dfr.promise();
}
