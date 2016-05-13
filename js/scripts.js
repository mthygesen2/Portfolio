$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
		menu: '#menu',
		scrollingSpeed: 1000,
    scrollOverflow: true
  });

  // $('.container').scroll(function() {
  //   var top = $(this).scrollTop();
  //   if (top > 100)
  //     $('#menu').addClass('color-change');
  // });
  // $(window).resize(function() {
  //   if ($(window).width() < 514) {
  //     $('.work-content').removeClass('slide');
  //   }
  //   //  else {
  //   //   $('.work-content').addClass('slide');
  //   // }
  // })
  // .resize();
});
