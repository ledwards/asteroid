Asteroid.Template.Pile.compose(Template.dark_force_pile, Asteroid.Collection.Dark.ForcePile);

Template.dark_force_pile.rendered = function() {
  var $pile = $(this.firstNode)
  var collection = Asteroid.Collection.Dark.ForcePile;

  $pile.deckDraggable({model: Asteroid.Collection.Dark.ForcePile});
  $pile.deckDroppable({model: Asteroid.Collection.Dark.ForcePile});
  $pile.contextMenu(collection, ["use", "lose", "draw", "peek", "shuffle", "search"], "force-pile");
}

Template.dark_force_pile.imageURL = function() {
  return "dark-side-back.gif";
}


Asteroid.Template.Pile.compose(Template.light_force_pile, Asteroid.Collection.Light.ForcePile);

Template.light_force_pile.rendered = function() {
  var $pile = $(this.firstNode)
  var collection = Asteroid.Collection.Light.ForcePile;

  $pile.deckDraggable({model: Asteroid.Collection.Light.ForcePile});
  $pile.deckDroppable({model: Asteroid.Collection.Light.ForcePile});
  $pile.contextMenu(collection, ["use", "lose", "draw", "peek", "shuffle", "search"], "force-pile");
}

Template.light_force_pile.imageURL = function() {
  return "light-side-back.gif";
}
