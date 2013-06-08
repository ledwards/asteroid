Template.game.dark_hand = function() {
  return Asteroid.Collection.Dark.Hand.find();
};

Template.game.dark_table = function() {
  return Asteroid.Collection.Dark.Table.find();
};

Template.game.dark_lost_pile = function() {
  return Asteroid.Collection.Dark.LostPile.findOne({}, {sort: {index: -1}});
};

Template.game.dark_reserve_deck = function() {
  return Asteroid.Collection.Dark.ReserveDeck.findOne({}, {sort: {index: -1}});
};

Template.game.light_hand = function() {
  return Asteroid.Collection.Light.Hand.find();
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
  $("#dark-hand").handDroppable({model: Asteroid.Collection.Dark.Hand});
  $("#light-hand").handDroppable({model: Asteroid.Collection.Light.Hand});
}
