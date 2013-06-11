(function($) {
  $.fn.cardDraggable = function(options) {
    this.draggable({
      containment: "#board",

      start: function(event, ui){
        $card = $(this);
        $card.css('cursor', 'move');
        $(".card, .pile").css('z-index', 0);
        $card.css('z-index', 100);
        $card.qtip("hide");
        $card.qtip("disable");
      },

      stop: function(event, ui){
        $card = $(this);
        sourceCollection = $card.pile();
        side = $card.side();
        table = side["Table"];
      }
    });

    return this;
  }
})(jQuery);
