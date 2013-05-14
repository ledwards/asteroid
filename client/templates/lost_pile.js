Asteroid.Template.Pile.compose(Template.lost_pile, LostPile);

Template.lost_pile.rendered = function() {
  $("#lost-pile.non-empty").deckDraggable({model: LostPile});
}
