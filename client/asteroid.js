Template.board.tableCards = function() {
  return Table.find();
}

Template.board.rendered = function() {
  $(".card").cardDraggable();
  $("#reserve-deck").deckDraggable();
};

(function($) {
  $.fn.cardDraggable = function(options) {
    this.draggable({
      start: function(event, ui){
        $(this).css('cursor', 'move');
        $(".ui-draggable").css('z-index', 0);
        $(this).css('z-index', 1);
      },

      stop: function(event, ui){
        card = $(this);
        Table.update({_id: card.attr("id")}, {$set: {x: card.css("left"), y: card.css("top")}});
      }
    });

    return this;
  }
})(jQuery);

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
