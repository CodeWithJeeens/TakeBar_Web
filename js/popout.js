$(document).ready(function() {
  // Elemente abrufen
  var overlay = $('.overlay');
  var popup = $('.popup');
  var closeBtn = $('.close-btn');
  var openBtn = $('#open-btn');

  // Klick-Event-Listener hinzufügen
  openBtn.click(function() {
    overlay.fadeIn();
    popup.addClass('show');
  });

  closeBtn.click(function() {
    overlay.fadeOut();
    popup.removeClass('show');
  });
});