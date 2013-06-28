(function($) {
  $.fn.cardTooltip = function(options) {
    $this = $(this);
    fullSizeImageURL = $this.attr("src").replace("thumbnail", "full_size");

    $this.qtip({
      content: "<img src='" + fullSizeImageURL + "'/>",
      position: { viewport: $("#board") },
      style: { classes: "qtip-light card-enlarged", width: "auto", height: "auto", tip: false },
      show: { event: "dblclick", solo: true },
      hide: { event: "unfocus" }
    });

    return this;
  }
})(jQuery);
