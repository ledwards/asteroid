Template.board.rendered = function() {
  $("#reserve-deck").deckDraggable();
};

Template.board.table_cards = function() {
  return Table.find();
};
