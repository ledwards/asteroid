Template.board.rendered = function() {
  $(".card").cardDraggable();
  $("#reserve-deck").deckDraggable();
};

Template.board.table_cards = function() {
  return Table.find();
};
