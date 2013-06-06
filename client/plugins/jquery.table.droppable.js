(function($) {
  $.fn.tableDroppable = function(options) {
    this.droppable({
      drop: function(event, ui) {
              $card = $(ui.helper);
              side = $card.side();
              sourceCollection = $card.pile();
              table = side["Table"];

              if (typeof sourceCollection != "undefined" && sourceCollection != side["Table"]) {
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
