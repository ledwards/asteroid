Asteroid.Template.Pile.compose(Template.dark_used_pile, Asteroid.Collection.Dark.UsedPile);

Template.dark_used_pile.rendered = function() {
  var $pile = $(this.firstNode);
  var collection = Asteroid.Collection.Dark.UsedPile;

  $pile.deckDraggable({model: Asteroid.Collection.Dark.UsedPile});
  $pile.deckDroppable({model: Asteroid.Collection.Dark.UsedPile});
  $pile.contextMenu(collection, ["recirculate", "lose", "draw", "peek", "shuffle", "search"], "used-pile");
}

Template.dark_used_pile.imageURL = function() {
  return "dark-side-back.gif";
}


Asteroid.Template.Pile.compose(Template.light_used_pile, Asteroid.Collection.Light.UsedPile);

Template.light_used_pile.rendered = function() {
  var $pile = $(this.firstNode);
  var collection = Asteroid.Collection.Light.UsedPile;

  $pile.deckDraggable({model: Asteroid.Collection.Light.UsedPile});
  $pile.deckDroppable({model: Asteroid.Collection.Light.UsedPile});
  $pile.contextMenu(collection, ["recirculate", "lose", "draw", "peek", "shuffle", "search"], "used-pile");
}

Template.light_used_pile.imageURL = function() {
  return "light-side-back.gif";
}
