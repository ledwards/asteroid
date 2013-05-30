Asteroid.Template.Pile.compose(Template.dark_lost_pile, DarkLostPile);

Template.dark_lost_pile.rendered = function() {
  $(this.firstNode).deckDraggable({model: DarkLostPile});
  $(this.firstNode).deckDroppable({model: DarkLostPile});
}

Template.dark_lost_pile.imageURL = function() {
  if(DarkLostPile.isEmpty()) {
    return "dark-side-back.gif";
  }
  else {
    return DarkLostPile.topCard().frontImageURL;
  }
}


Asteroid.Template.Pile.compose(Template.light_lost_pile, LightLostPile);

Template.light_lost_pile.rendered = function() {
  $(this.firstNode).deckDraggable({model: LightLostPile});
  $(this.firstNode).deckDroppable({model: LightLostPile});
}

Template.light_lost_pile.imageURL = function() {
  if(LightLostPile.isEmpty()) {
    return "light-side-back.gif";
  }
  else {
    return LightLostPile.topCard().frontImageURL;
  }
}
