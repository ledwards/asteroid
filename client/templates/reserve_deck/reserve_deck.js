Asteroid.Template.Pile.compose(Template.dark_reserve_deck, DarkReserveDeck);

Template.dark_reserve_deck.rendered = function() {
  $(this.firstNode).deckDraggable({model: DarkReserveDeck});
  $(this.firstNode).deckDroppable({model: DarkReserveDeck});
}

Template.dark_reserve_deck.imageURL = function() {
  return "dark-side-back.gif";
}


Asteroid.Template.Pile.compose(Template.light_reserve_deck, LightReserveDeck);

Template.light_reserve_deck.rendered = function() {
  $(this.firstNode).deckDraggable({model: LightReserveDeck});
  $(this.firstNode).deckDroppable({model: LightReserveDeck});
}

Template.light_reserve_deck.imageURL = function() {
  return "light-side-back.gif";
}
