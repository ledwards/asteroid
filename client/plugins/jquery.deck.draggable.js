(function($) {
  $.fn.deckDraggable = function(options) {
    this.draggable({
      helper: "clone",

      start: function(e, ui) {
              $card = $(ui.helper)
              sideName = $card.closest(".side").data("side");
              collectionName = $(ui.helper.context).data("collection");
              pile = Asteroid.Collection[sideName][collectionName];
              cardModel = pile.topCard();

              $card.css('cursor', 'move');
              $(".card,.pile").css('z-index', 0);
              $card.css('z-index', 1);
              $card.data("collection", collectionName);
              $card.attr("id", cardModel._id);
            }
    });

    return this;
  }
})(jQuery);
