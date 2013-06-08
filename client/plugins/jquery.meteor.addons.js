function MeteorAddonException(message) {
   this.message = message;
   this.name = "MeteorAddonException";
}

(function($) {
  $.fn.collection = function(options) {
    defaults = {namespace: window};
    options = typeof(options) !== "undefined" ? options : defaults;
    collectionName = this.data("collection");
    namespace = options["namespace"];

    if(collectionName) {
      if(typeof namespace == "string") {
        namespaces = namespace.split(".").concat(collectionName);
        return _.reduce(namespaces, function(memo, n){return memo[n]}, window);
      }
      else {
        return namespace[collectionName];
      }
    }

    else {
      throw new MeteorAddonException("undefined data-collection on element");
    }
  }
})(jQuery);
