(function($) {
  $.fn.tableDroppable = function(options) {
    this.droppable({
      drop: function(event, ui) {
              $card = $(ui.helper);
              $side = $card.closest(".side");
              sideName = $side.data("side");
              collectionName = $card.data("collection");
              table = Asteroid.Collection[sideName]["Table"];
              sourceCollection = Asteroid.Collection[sideName][collectionName];
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
