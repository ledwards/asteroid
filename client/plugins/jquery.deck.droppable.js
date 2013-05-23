(function($) {
  $.fn.deckDroppable = function(options) {
    this.droppable({
      over: function() {
              $(this).addClass("over");
             },

      drop: function(event, ui) {
              var $card = $(ui.helper);
              var sourceCollection = window[$card.data("collection")] || Table;
              var cardModel = sourceCollection.findOne($card.attr("id"));

              options.model.addToTop(cardModel, sourceCollection);
              $card.remove();
            },

      greedy: true
    });

    return this;
  }
})(jQuery);
