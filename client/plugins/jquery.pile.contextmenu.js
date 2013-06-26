(function($) {
  $.fn.reserveDeckMenu = function(options) {
    $this = $(this);

    $this.qtip({
      content: '\
        <ul class="context-menu-items" data-context-menu="reserve-deck">\
          <li><a href="#shuffle">Shuffle</a>\
          <li><a href="#activate">Activate</a>\
            <ul class="context-menu-subitems">\
              <li><input maxlength="2" type="text" placeholder="1"/><label>Force</label></li>\
            </ul>\
          </li>\
          <li><a href="#lose">Lose</a>\
            <ul class="context-menu-subitems">\
              <li><input maxlength="2" type="text" placeholder="1"/><label>Force</label></li>\
            </ul>\
          </li>\
          <li><a href="#draw">Draw</a>\
            <ul class="context-menu-subitems">\
              <li><input maxlength="2" type="text" placeholder="1"/><label>cards</label></li>\
            </ul>\
          </li>\
          <li><a href="#peek">Peek</a>\
            <ul class="context-menu-subitems">\
              <li><input maxlength="2" type="text" placeholder="1"/><label>cards</label></li>\
            </ul>\
          </li>\
          <li><a href="#search">Search</a>\
        </ul>\
      ',
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
  }
})(jQuery);

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
