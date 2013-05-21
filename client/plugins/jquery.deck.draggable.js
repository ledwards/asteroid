(function($) {
  $.fn.deckDraggable = function(options) {
    this.draggable({
      helper: "clone",

      start: function(e, ui) {
              $card = $(ui.helper)
              collectionName = $(ui.helper.context).data("collection");
              pile = window[collectionName];
              cardModel = pile.topCard();

              $card.css('cursor', 'move');
              $(".ui-draggable").css('z-index', 0);
              $card.css('z-index', 1);
              $card.data("collection", collectionName);
              $card.attr("id", cardModel._id);
            }
    });

    return this;
  }
})(jQuery);
