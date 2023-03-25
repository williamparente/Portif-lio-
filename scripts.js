$(document).ready(function() {
    $('.watch-now').click(function(event) {
      event.preventDefault();
      var title = $(this).data('title');
      alert('You clicked the "Watch Now" button for ' + title);
    });
  });
  
