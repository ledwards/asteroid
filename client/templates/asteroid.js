Asteroid.Template.Pile = function(template, model) {
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
};

Asteroid.Template.Pile.compose = function(template, model) {
  $.extend(template, new Asteroid.Template.Pile(template, model));
}
