(function($) {
  $.fn.cardDraggable = function(options) {
    this.draggable({
      start: function(event, ui){
        $(this).css('cursor', 'move');
        $(".card, .pile").css('z-index', 0);
        $(this).css('z-index', 1);
      },

      stop: function(event, ui){
        card = $(this);
        $side = $card.closest(".side");
        table = window["Asteroid.Collection." + $side.data("side") + ".Table"];
        table.update({_id: card.attr("id")}, {$set: {x: card.css("left"), y: card.css("top")}});
      }
    });

    return this;
  }
})(jQuery);
