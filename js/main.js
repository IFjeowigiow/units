$('#video').click(function () {
    $('.popup').show(300);
    $('.popup-overlay').show();
  });
$('.popup-overlay').click(function () {
    $('.popup').hide(300);
    $(this).hide();
});