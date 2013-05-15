(function($) {
  $.fn.deckDroppable = function(options) {
    this.droppable({
      drop: function(e, ui) {
              var $card = $(ui.helper);
              var cardModel = Table.findOne($card.attr("id"));
              options.model.addToTop(cardModel);
              $card.remove();
            }
    });

    return this;
  }
})(jQuery);

// TODO: Drag directly from pile to pile
