Asteroid.Template.Pile.compose(Template.dark_force_pile, DarkForcePile);

Template.dark_force_pile.rendered = function() {
  $(this.firstNode).deckDraggable({model: DarkForcePile});
  $(this.firstNode).deckDroppable({model: DarkForcePile});
}

Template.dark_force_pile.imageURL = function() {
  return "dark-side-back.gif";
}


Asteroid.Template.Pile.compose(Template.light_force_pile, LightForcePile);

Template.light_force_pile.rendered = function() {
  $(this.firstNode).deckDraggable({model: LightForcePile});
  $(this.firstNode).deckDroppable({model: LightForcePile});
}

Template.light_force_pile.imageURL = function() {
  return "light-side-back.gif";
}
