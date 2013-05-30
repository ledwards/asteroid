(function($) {
  $.fn.deckDroppable = function(options) {
    this.droppable({
      over: function() {
              $(this).addClass("over");
             },

      drop: function(event, ui) {
              $card = $(ui.helper);
              $side = $card.closest(".side");
              table = window[$side.data("side") + "Table"];
              sourceCollection = window[$card.data("collection")] || table;
              cardModel = sourceCollection.findOne($card.attr("id"));

              options.model.addToTop(cardModel, sourceCollection);
              $card.remove();
            },

      greedy: true
    });

    return this;
  }
})(jQuery);
