(function($) {
  $.fn.tableDroppable = function(options) {
    this.droppable({
      drop: function(event, ui) {
              $card = $(ui.helper);
              sourceCollection = window[$card.data("collection")];
              $lifeForce = $("#life-force");

              if (sourceCollection) {
                $card.remove();
                x = parseInt($card.css("left")) + parseInt($lifeForce.css("left"));
                y = parseInt($card.css("top")) + parseInt($lifeForce.css("top"));
                sourceCollection.moveToTable(x + "px", y + "px");
              }
            }
    });

    return this;
  }
})(jQuery);
