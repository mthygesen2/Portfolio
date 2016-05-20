$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
		menu: '#menu',
		scrollingSpeed: 1000,
    scrollOverflow: true,
    // responsiveWidth: 414px,
    // autoScrolling:false
  });
  $(window).scroll(function () {
    if ($('#section0').scrollTop() == 0) {
    $('#menu img').attr('src', 'img/logo-white.png');
  } else {
    $('#menu img').attr('src', 'img/logo.png');
  }
});

  // hiding and showing on work page
  $('.work-content').hide();
  $('#wild').click(function() {
    $('.collage').hide();
    $('#wild-info').show();
  });
  $('#taproom').click(function() {
    $('.collage').hide();
    $('#taproom-info').show();
  });
  $('#git').click(function() {
    $('.collage').hide();
    $('#git-info').show();
  });
  $('#soon').click(function() {
    $('.collage').hide();
    $('#soon-info').show();
  });
  $('.back').click(function() {
    $('.work-content').hide();
    $('.collage').show();
  });

});
