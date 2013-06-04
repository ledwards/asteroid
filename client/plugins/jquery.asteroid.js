(function($) {
  $.fn.side = function(options) {
    $card = $(this);
    side = $card.data("side");
    return Asteroid.Collection[side];
  }
})(jQuery);

(function($) {
  $.fn.pile = function(options) {
    $pile = $(this);
    side = $card.data("side");
    collectionName = $card.data("collection");
    return side[collectionName];
  }
})(jQuery);
