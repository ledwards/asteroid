Template.card.rendered = function() {
  card = $(this.firstNode)
  $(".card").css("z-index", "0")
  card.cardDraggable().css("z-index", "1");
}

Template.board.rendered = function() {
  // refactor into its own plugin
  $("#table").droppable({
    drop: function(event, ui) {
            $card = $(ui.helper);
            sourceCollection = window[$card.data("collection")];

            $card.remove();
            sourceCollection.moveToTable($card.css("left"), $card.css("top"));
        }
  });
}
