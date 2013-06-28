Asteroid.Template.Pile.compose(Template.dark_lost_pile, Asteroid.Collection.Dark.LostPile);

Template.dark_lost_pile.rendered = function() {
  var $pile = $(this.firstNode);
  var collection = Asteroid.Collection.Dark.LostPile;

  $pile.deckDraggable({model: Asteroid.Collection.Dark.LostPile});
  $pile.deckDroppable({model: Asteroid.Collection.Dark.LostPile});
  $pile.contextMenu(collection, ["retrieve", "draw", "peek", "shuffle", "search"], "lost-pile");
  // $pile.cardTooltip();
}

Template.dark_lost_pile.imageURL = function() {
  if(Asteroid.Collection.Dark.LostPile.isEmpty()) {
    return "dark-side-back.gif";
  }
  else {
    return Asteroid.Collection.Dark.LostPile.topCard().frontImageURL;
  }
}


Asteroid.Template.Pile.compose(Template.light_lost_pile, Asteroid.Collection.Light.LostPile);

Template.light_lost_pile.rendered = function() {
  var $pile = $(this.firstNode);
  var collection = Asteroid.Collection.Light.LostPile;

  $pile.deckDraggable({model: Asteroid.Collection.Light.LostPile});
  $pile.deckDroppable({model: Asteroid.Collection.Light.LostPile});
  $pile.contextMenu(collection, ["retrieve", "draw", "peek", "shuffle", "search"], "lost-pile");
  // $pile.cardTooltip();
}

Template.light_lost_pile.imageURL = function() {
  if(Asteroid.Collection.Light.LostPile.isEmpty()) {
    return "light-side-back.gif";
  }
  else {
    return Asteroid.Collection.Light.LostPile.topCard().frontImageURL;
  }
}
