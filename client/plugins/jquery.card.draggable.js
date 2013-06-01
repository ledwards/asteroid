(function($) {
  $.fn.cardDraggable = function(options) {
    this.draggable({
      start: function(event, ui){
        $(this).css('cursor', 'move');
        $(".card, .pile").css('z-index', 0);
        $(this).css('z-index', 100);
      },

      stop: function(event, ui){
        $card = $(this);
        $side = $card.closest(".side");
        sideName = $side.data("side");
        table = Asteroid.Collection[sideName]["Table"];
        table.update({_id: $card.attr("id")}, {$set: {x: $card.css("left"), y: $card.css("top")}});
      }
    });

    return this;
  }
})(jQuery);
