$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
		menu: '#menu',
		scrollingSpeed: 700,
    scrollOverflow: true,
    responsiveWidth: 768,
    css3: true,
    scrollOverflow: true,
    easing: 'easeInQuart',
    easingcss3: 'ease',
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
  $('#noble').click(function() {
    $('.collage').hide();
    $('#noble-info').show();
  });
  $('#sass').click(function() {
    $('.collage').hide();
    $('#sass-info').show();
  });
  $('#game').click(function() {
    $('.collage').hide();
    $('#game-info').show();
  });
  $('.back').click(function() {
    $('.work-content').hide();
    $('.collage').show();
  });

});
