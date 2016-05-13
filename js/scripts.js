$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
		menu: '#menu',
		scrollingSpeed: 1000,
    scrollOverflow: true
  });
  $('.work-content').hide();
  $('#wild').click(function() {
    $('.work-heading').hide('slide', {direction: 'up'}, 1000);
    $('#wild-info').show('blind', {direction: 'down'}, 2000);
  });
  $('#back').click(function() {
    $('#wild-info').hide('slide', {direction: 'down'}, 1000);
    $('.work-heading').show('slide', {direction: 'up'}, 1000);
  });
  $('#taproom').click(function() {
    $('.work-heading').hide('slide', {direction: 'up'}, 1000);
    $('#taproom-info').show('blind', {direction: 'down'}, 2000);
  });
  $('#back').click(function() {
    $('#taproom-info').hide('slide', {direction: 'down'}, 1000);
    $('.work-heading').show('slide', {direction: 'up'}, 1000);
  });
  $('#git').click(function() {
    $('.work-heading').hide('slide', {direction: 'up'}, 1000);
    $('#git-info').show('blind', {direction: 'down'}, 2000);
  });
  $('#back').click(function() {
    $('#git-info').hide('slide', {direction: 'down'}, 1000);
    $('.work-heading').show('slide', {direction: 'up'}, 1000);
  });
  $('#soon').click(function() {
    $('.work-heading').hide('slide', {direction: 'up'}, 1000);
    $('#soon-info').show('blind', {direction: 'down'}, 2000);
  });
  $('#back').click(function() {
    $('#soon-info').hide('slide', {direction: 'down'}, 1000);
    $('.work-heading').show('slide', {direction: 'up'}, 1000);
  });
});
