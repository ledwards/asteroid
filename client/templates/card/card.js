Template.card.rendered = function() {
  $card = $(this.firstNode)
  $(".card").css("z-index", "0")
  $card.cardDraggable().css("z-index", "1");
  $card.cardTooltip();
}

Template.hand_card.rendered = function() {
  $card = $(this.firstNode)
  $(".card").css("z-index", "0")
  $card.cardDraggable().css("z-index", "1");
  $card.cardTooltip();
}
