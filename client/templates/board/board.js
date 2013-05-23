Template.board.table = function() {
  return Table.find();
};

Template.board.lost_pile = function() {
  return LostPile.findOne({}, {sort: {index: -1}});
};

Template.board.reserve_deck = function() {
  return ReserveDeck.findOne({}, {sort: {index: -1}});
};

Template.board.rendered = function() {
  $("#table").tableDroppable();
}
