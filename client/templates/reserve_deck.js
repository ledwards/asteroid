Template.reserve_deck.status = function() {
  if (ReserveDeck.isEmpty()) {
    return "empty";
  }
  else {
    return "non-empty";
  }
}

Template.reserve_deck.rendered = function() {
  $("#reserve-deck.non-empty").deckDraggable({model: ReserveDeck});
}

// TODO: Figure out how to use inheritance for Templates
