Asteroid.Template.Pile = {
  init: function(template, model) {
          this.template = template;
          this.model = model;

          template.status = $.proxy(function() {
             if (this.model.isEmpty()) {
               return "empty";
             }
             else {
               return "non-empty";
             }
           }, this);
        }
};

// TODO: Figure out how to change this to use $.extend
