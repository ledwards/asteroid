Asteroid.Template.Pile.compose(Template.dark_reserve_deck, Asteroid.Collection.Dark.ReserveDeck);

Template.dark_reserve_deck.rendered = function() {
  var $pile = $(this.firstNode);
  var collection = Asteroid.Collection.Dark.ReserveDeck;

  $pile.deckDroppable({model: collection});
  $pile.deckDraggable({model: collection});
  $pile.contextMenu(collection, ["activate", "lose", "draw", "peek", "shuffle", "search"], "reserve-deck");
}

Template.dark_reserve_deck.imageURL = function() {
  return "dark-side-back.gif";
}


Asteroid.Template.Pile.compose(Template.light_reserve_deck, Asteroid.Collection.Light.ReserveDeck);

Template.light_reserve_deck.rendered = function() {
  var $pile = $(this.firstNode);
  var collection = Asteroid.Collection.Light.ReserveDeck;

  $pile.deckDroppable({model: collection});
  $pile.deckDraggable({model: collection});
  $pile.contextMenu(collection, ["activate", "lose", "draw", "peek", "shuffle", "search"], "reserve-deck");
}

Template.light_reserve_deck.imageURL = function() {
  return "light-side-back.gif";
}
