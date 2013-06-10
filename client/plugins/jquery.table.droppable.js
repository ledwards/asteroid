(function($) {
  $.fn.tableDroppable = function(options) {
    this.droppable({
      drop: function(event, ui) {
              $card = $(ui.helper);
              side = $card.side();
              sourceCollection = $card.pile();
              table = side["Table"];
              $container = $card.closest(".container");
              x = parseInt($card.css("left")) + parseInt($container.css("left")) + "px";
              y = parseInt($card.css("top")) + parseInt($container.css("top")) + "px";

              if (typeof sourceCollection != "undefined" && sourceCollection == side["Hand"]) {
                card = sourceCollection.findOne($card.attr("id"));
                if (card) {
                  table.insert(card);
                  table.update({_id: card._id}, {$set: {x: x, y: y}})
                  sourceCollection.remove(card._id);
                }
              }
              else if (typeof sourceCollection != "undefined" && sourceCollection != side["Table"]) {
                $container = $card.closest(".container");
                sourceCollection.moveToTable(table, x, y);
              }
              else {
                table.update({_id: $card.attr("id")}, {$set: {x: $card.css("left"), y: $card.css("top")}});
              }

              $card.data("collection", "Table");
            }
    });

    return this;
  }
})(jQuery);
