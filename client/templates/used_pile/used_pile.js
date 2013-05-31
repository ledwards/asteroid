Asteroid.Template.Pile.compose(Template.dark_used_pile, Asteroid.Collection.Dark.UsedPile);

Template.dark_used_pile.rendered = function() {
  $(this.firstNode).deckDraggable({model: Asteroid.Collection.Dark.UsedPile});
  $(this.firstNode).deckDroppable({model: Asteroid.Collection.Dark.UsedPile});
}

Template.dark_used_pile.imageURL = function() {
  return "dark-side-back.gif";
}


Asteroid.Template.Pile.compose(Template.light_used_pile, Asteroid.Collection.Light.UsedPile);

Template.light_used_pile.rendered = function() {
  $(this.firstNode).deckDraggable({model: Asteroid.Collection.Light.UsedPile});
  $(this.firstNode).deckDroppable({model: Asteroid.Collection.Light.UsedPile});
}

Template.light_used_pile.imageURL = function() {
  return "light-side-back.gif";
}
