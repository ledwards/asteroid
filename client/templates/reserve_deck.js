Asteroid.Template.Pile.compose(Template.reserve_deck, ReserveDeck);

Template.reserve_deck.rendered = function() {
  $("#reserve-deck.non-empty").deckDraggable({model: ReserveDeck});
}

// TODO: Extract the call to deckDraggable into Asteroid.Template.Pile
