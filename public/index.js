$(document).ready(function(){
  // $.get('http://172.24.1.1:8080/liveview/start');
  takePhoto = function() {
    return $.get('http://172.24.1.1:8080/ctrl/rec?action=start');
  };
  $('.liveview').click(takePhoto);
});
