Template.reserve_deck.status = function() {
  if (ReserveDeck.isEmpty()) {
    return "empty";
  }
  else {
    return "";
  }
}

Template.reserve_deck.rendered = function() {
  $("#reserve-deck").deckDraggable();
}
