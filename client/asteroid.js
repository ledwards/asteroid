Template.board.cards = function() {
  return Cards.find();
}

Template.board.rendered = function() {
  $(".card").draggable({
    stop: function(e, ui) {
            card = $(this);
            Cards.update({_id: card.attr("id")}, {$set: {x: card.css("left"), y: card.css("top")}});
          }
  });
};
