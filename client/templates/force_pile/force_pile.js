Asteroid.Template.Pile.compose(Template.force_pile, ForcePile);

Template.force_pile.rendered = function() {
  $(this.firstNode).deckDraggable({model: ForcePile});
  $(this.firstNode).deckDroppable({model: ForcePile});
}

Template.force_pile.imageURL = function() {
  return "dark-side-back.gif";
}
