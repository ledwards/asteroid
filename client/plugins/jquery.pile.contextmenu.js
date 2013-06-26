(function($) {
  $.fn.contextMenu = function(items, name, options) {
    $this = $(this);

    $this.qtip({
      content: Asteroid.ContextMenu.new(items, name),
      position: { at: "top right", viewport: $("#board"), adjust: { x: 10, y: 2, method: "shift" } },
      style: { classes: "qtip-light context-menu", tip: false },
      show: { event: "contextmenu", solo: true },
      hide: { event: "unfocus" },
      events: {
        render: function() {
                  $(this).find("ul[data-context-menu]").menu({
                    select: function(event, ui) {
                              var $target = $(ui.item);
                              var $relatedInput = $target.find("input");
                              var functionName = $target.find("a").attr("href").replace("#","");
                              var value = parseInt($relatedInput.val());
                              console.log(functionName + " " + value);
                              $(".context-menu").hide();
                              event.preventDefault();
                            }
                  });
                }
      }
    });

    return this;
  };

  $("ul.context-menu-items li").live("hover", function(event, ui) {
    $relatedInput = $(event.target).siblings().find("input");
    setTimeout(function() {
      $relatedInput.val("").focus();
    }, 300);
  });

  $("ul.context-menu-items input").live("keyup", function(event, ui) {
    if(event.keyCode == 13) { // Enter
      $(this).closest("ul").closest("li").click();
    }
  });
})(jQuery);
