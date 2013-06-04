(function($) {
  $.fn.cardDraggable = function(options) {
    this.draggable({
      start: function(event, ui){
        $card = $(this);
        $card.css('cursor', 'move');
        $(".card, .pile").css('z-index', 0);
        $card.css('z-index', 100);
      },

      stop: function(event, ui){
        $card = $(this);
        side = $card.side();
        table = side["Table"];
        table.update({_id: $card.attr("id")}, {$set: {x: $card.css("left"), y: $card.css("top")}});
      }
    });

    return this;
  }
})(jQuery);
