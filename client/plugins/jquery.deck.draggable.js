(function($) {
  $.fn.deckDraggable = function(options) {
    this.draggable({
      helper: "clone",

      start: function(e, ui) {
              $card = $(ui.helper)
              collectionName = $(ui.helper.context).data("collection");
              pile = $card.collection({namespace: $card.side()});
              cardModel = pile.topCard();

              $card.css('cursor', 'move');
              $(".card,.pile").css('z-index', 0);
              $card.css('z-index', 1);
              $card.data("collection", collectionName);
              $card.attr("id", cardModel._id);
            },

      end: function(e, ui) {
             $card = $(ui.helper)
             $card.data("collection", null);
           }
    });

    return this;
  }
})(jQuery);
