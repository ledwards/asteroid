Asteroid.Template.Pile.init(Template.reserve_deck, ReserveDeck);

Template.reserve_deck.rendered = function() {
  $("#reserve-deck.non-empty").deckDraggable({model: ReserveDeck});
}
