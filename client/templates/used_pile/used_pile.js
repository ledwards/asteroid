Asteroid.Template.Pile.compose(Template.dark_used_pile, DarkUsedPile);

Template.dark_used_pile.rendered = function() {
  $(this.firstNode).deckDraggable({model: DarkUsedPile});
  $(this.firstNode).deckDroppable({model: DarkUsedPile});
}

Template.dark_used_pile.imageURL = function() {
  return "dark-side-back.gif";
}


Asteroid.Template.Pile.compose(Template.light_used_pile, LightUsedPile);

Template.light_used_pile.rendered = function() {
  $(this.firstNode).deckDraggable({model: LightUsedPile});
  $(this.firstNode).deckDroppable({model: LightUsedPile});
}

Template.light_used_pile.imageURL = function() {
  return "light-side-back.gif";
}
