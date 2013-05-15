Asteroid.Template.Pile.compose(Template.lost_pile, LostPile);

Template.lost_pile.rendered = function() {
  $(this.firstNode).deckDraggable({model: LostPile});
  $(this.firstNode).deckDroppable({model: LostPile});
}

Template.lost_pile.imageURL = function() {
  if(LostPile.isEmpty()) {
    return "dark-side-back.gif";
  }
  else {
    return LostPile.topCard().frontImageURL;
  }
}
