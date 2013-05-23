Asteroid.Template.Pile.compose(Template.used_pile, UsedPile);

Template.used_pile.rendered = function() {
  $(this.firstNode).deckDraggable({model: UsedPile});
  $(this.firstNode).deckDroppable({model: UsedPile});
}

Template.used_pile.imageURL = function() {
  return "dark-side-back.gif";
}
