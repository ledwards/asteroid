function MeteorAddonException(message) {
   this.message = message;
   this.name = "MeteorAddonException";
}


(function($) {
  $.fn.collection = function(options) {
    options = typeof(options) !== "undefined" ? options : {namespace: undefined};
    collectionName = this.data("collection");

    if(collectionName) {
      if(typeof options["namespace"] !== "undefined") {
        namespaces = options["namespace"].split(".").concat(collectionName);
        return _.reduce(namespaces, function(memo, n){return memo[n]}, window);
      }
      else {
        return window[collectionName];
      }
    }

    else {
      throw new MeteorAddonException("undefined data-collection on element");
    }
  }
})(jQuery);


// TODO: Add a jQuery method for retrieving the Template object for any DOM element
