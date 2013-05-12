Template.lost_pile.status = function() {
  if (LostPile.isEmpty()) {
    return "empty";
  }
  else {
    return "non-empty";
  }
}

Template.lost_pile.rendered = function() {
  $("#lost-pile.non-empty").deckDraggable({model: LostPile});
}
