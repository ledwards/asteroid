Template.board.rendered = function() {
  $("#reserve-deck").deckDraggable();
};

Template.board.table = function() {
  return Table.find();
};
