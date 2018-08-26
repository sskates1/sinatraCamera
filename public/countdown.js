function countdown(){
  var dfr = new $.Deferred();
  $('#overlay').css("display","block");
  setTimeout(function() {
    var time = 5; /* how long the timer will run (seconds) */
    $('h2').text(time);
    var initialOffset = '440';
    var i = 1;
    /* Need initial run as interval hasn't yet occured... */
    $('.circle_animation').css('stroke-dashoffset', -1*(initialOffset/time));

      var interval = setInterval(function() {
          $('h2').text(time-i);
          if (i == time) {
            clearInterval(interval);
            console.log("resolved");
            $('#overlay').css("display","none");
            takePhoto();

            return;
          }
          $('.circle_animation').css('stroke-dashoffset', -1*((i+1)*(initialOffset/time)));
          i++;
    }, 1000);
  }, 0);
  return dfr.promise();
}
