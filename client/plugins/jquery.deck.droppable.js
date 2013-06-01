(function($) {
  $.fn.deckDroppable = function(options) {
    this.droppable({
      over: function() {
              $(this).addClass("over");
             },

      drop: function(event, ui) {
              $card = $(ui.helper);
              $side = $card.closest(".side");
              sideName = $side.data("side");
              collectionName = $card.data("collection") || "Table";
              sourceCollection = Asteroid.Collection[sideName][collectionName];
              cardModel = sourceCollection.findOne($card.attr("id"));

              options.model.addToTop(cardModel, sourceCollection);
              $card.remove();
            },

      greedy: true
    });

    return this;
  }
})(jQuery);
