$(document).ready(function(){
  // $.get('http://172.24.1.1:8080/liveview/start');
  $.get('http://172.24.1.1:8080/ctrl/mode?action=to_cap');
  takePhoto = function() {
    return $.get('http://172.24.1.1:8080/ctrl/rec?action=start');
  };
  $('.clickable').click(countdown);
});
