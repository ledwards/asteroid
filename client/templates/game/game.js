Template.game.dark_table = function() {
  return Asteroid.Collection.Dark.Table.find();
};

Template.game.dark_lost_pile = function() {
  return Asteroid.Collection.Dark.LostPile.findOne({}, {sort: {index: -1}});
};

Template.game.dark_reserve_deck = function() {
  return Asteroid.Collection.Dark.ReserveDeck.findOne({}, {sort: {index: -1}});
};

Template.game.light_table = function() {
  return Asteroid.Collection.Light.Table.find();
};

Template.game.light_lost_pile = function() {
  return Asteroid.Collection.Light.LostPile.findOne({}, {sort: {index: -1}});
};

Template.game.light_reserve_deck = function() {
  return Asteroid.Collection.Light.ReserveDeck.findOne({}, {sort: {index: -1}});
};

Template.game.rendered = function() {
  $(this.firstNode).tableDroppable();
}
