(function($) {
  $.fn.tableDroppable = function(options) {
    this.droppable({
      drop: function(event, ui) {
              var $card = $(ui.helper);
              var sourceCollection = window[$card.data("collection")];

              if (sourceCollection) {
                $card.remove();
                sourceCollection.moveToTable($card.css("left"), $card.css("top"));
              }
            }
    });

    return this;
  }
})(jQuery);
