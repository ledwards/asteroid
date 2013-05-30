Template.game.dark_table = function() {
  return DarkTable.find();
};

Template.game.dark_lost_pile = function() {
  return DarkLostPile.findOne({}, {sort: {index: -1}});
};

Template.game.dark_reserve_deck = function() {
  return DarkReserveDeck.findOne({}, {sort: {index: -1}});
};

Template.game.light_table = function() {
  return LightTable.find();
};

Template.game.light_lost_pile = function() {
  return LightLostPile.findOne({}, {sort: {index: -1}});
};

Template.game.light_reserve_deck = function() {
  return LightReserveDeck.findOne({}, {sort: {index: -1}});
};

Template.game.rendered = function() {
  $(this.firstNode).tableDroppable();
}
