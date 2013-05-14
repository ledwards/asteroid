Asteroid.Template.Pile.compose(Template.lost_pile, LostPile);

Template.lost_pile.rendered = function() {
  $(this.firstNode).deckDraggable({model: LostPile});
}
