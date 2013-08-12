Asteroid.UI.init = function() {
  $("#peek-window").live("peek", function(event, collection, value) {
    $this = $(this);
    $this.html("");
    collection.topNCards(value).forEach(function(card) {
      $this.append("<img src='" + card.frontImageURL + "'></img>")
    });
  });

  $("#peek-window").qtip({
    content: "Content",
    position: { my: "center", at: "center", target: $("body")},
    style: { classes: "qtip-light context-menu", tip: false },
    events: {
      render: function() {
                console.log("rendered");
              }
    }
  });
};
