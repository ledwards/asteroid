Template.board.rendered = function() {
  $(".card").cardDraggable();
  $("#reserve-deck").deckDraggable();
};

Template.board.tableCards = function() {
  return Table.find();
};
