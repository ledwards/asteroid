(function($) {
  $.fn.tableDroppable = function(options) {
    this.droppable({
      drop: function(event, ui) {
              $card = $(ui.helper);
              side = $card.side();

              collectionName = $card.data("collection");
              sourceCollection = side[collectionName];

              sideName = $card.data("side");
              table = side["Table"];

              if (sourceCollection) {
                $lifeForce = $card.closest(".life-force");
                $card.remove();
                x = parseInt($card.css("left")) + parseInt($lifeForce.css("left"));
                y = parseInt($card.css("top")) + parseInt($lifeForce.css("top"));
                sourceCollection.moveToTable(table, x + "px", y + "px");
              }
            }
    });

    return this;
  }
})(jQuery);
