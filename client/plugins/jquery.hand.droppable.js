(function($) {
  $.fn.handDroppable = function(options) {
    this.droppable({
      over: function() {
              $(this).addClass("over");
             },

      drop: function(event, ui) {
              $card = $(ui.helper);
              side = $card.side();
              sourceCollection = $card.pile();
              cardModel = sourceCollection.findOne($card.attr("id"));

              sourceCollection.remove(cardModel._id);
              options.model.insert(cardModel);
              options.model.update(cardModel._id, {$set: {x: null, y: null}})

              $card.remove();
            },

      greedy: true
    });

    return this;
  }
})(jQuery);
