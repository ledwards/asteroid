(function($) {
  $.fn.deckDraggable = function(options) {
    this.draggable({
      helper: "clone",

      start: function(e, ui) {
              $(this).css('cursor', 'move');
              $(".ui-draggable").css('z-index', 0);
              $(this).css('z-index', 1);
            },

      stop: function(event, ui) {
              var card = $(ui.helper);
              card.remove();
              ReserveDeck.moveToTable(card.css("left"), card.css("top"));
          }
    });

    return this;
  }
})(jQuery);
