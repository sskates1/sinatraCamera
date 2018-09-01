function countdown(){
  var dfr = new $.Deferred();
  $('.instructions').css("display","none");
  $('.countdown').css("display","block");
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
            return;
          }
          $('.circle_animation').css('stroke-dashoffset', -1*((i+1)*(initialOffset/time)));
          i++;
    }, 1000);
  }, 0);
  return dfr.promise();
}
