Asteroid.Template.Pile.compose(Template.dark_force_pile, Asteroid.Collection.Dark.ForcePile);

Template.dark_force_pile.rendered = function() {
  $(this.firstNode).deckDraggable({model: Asteroid.Collection.Dark.ForcePile});
  $(this.firstNode).deckDroppable({model: Asteroid.Collection.Dark.ForcePile});
}

Template.dark_force_pile.imageURL = function() {
  return "dark-side-back.gif";
}


Asteroid.Template.Pile.compose(Template.light_force_pile, Asteroid.Collection.Light.ForcePile);

Template.light_force_pile.rendered = function() {
  $(this.firstNode).deckDraggable({model: Asteroid.Collection.Light.ForcePile});
  $(this.firstNode).deckDroppable({model: Asteroid.Collection.Light.ForcePile});
}

Template.light_force_pile.imageURL = function() {
  return "light-side-back.gif";
}
