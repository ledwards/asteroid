Asteroid.Template.Pile.compose(Template.reserve_deck, ReserveDeck);

Template.reserve_deck.rendered = function() {
  $(this.firstNode).deckDraggable({model: ReserveDeck});
}
