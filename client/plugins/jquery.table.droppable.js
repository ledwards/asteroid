(function($) {
  $.fn.tableDroppable = function(options) {
    this.droppable({
      drop: function(event, ui) {
              $card = $(ui.helper);
              $side = $card.closest(".side");
              sourceCollection = window[$card.data("collection")];
              table = window[$side.data("side") + "Table"];
              $lifeForce = $side.find(".life-force");

              if (sourceCollection) {
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
