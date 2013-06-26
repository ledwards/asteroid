Asteroid.ContextMenu = {
  new : function(items, name) {
          var that = this;
          return '\
            <ul class="context-menu-items" data-context-menu="' + name + '">\
              ' + _.collect(items, function(itemName){ return that["Items"][itemName] }).join("") + '\
            </ul>'
        },

  Items: {
    activate: '\
      <li><a href="#activate">Activate</a>\
        <ul class="context-menu-subitems">\
          <li><input maxlength="2" type="text" placeholder="1"/><label>Force</label></li>\
        </ul>\
      </li>',

    lose: '\
      <li><a href="#lose">Lose</a>\
        <ul class="context-menu-subitems">\
          <li><input maxlength="2" type="text" placeholder="1"/><label>Force</label></li>\
        </ul>\
      </li>',

    draw: '\
      <li><a href="#draw">Draw</a>\
        <ul class="context-menu-subitems">\
          <li><input maxlength="2" type="text" placeholder="1"/><label>cards</label></li>\
        </ul>\
      </li>',

    peek: '\
      <li><a href="#peek">Peek</a>\
        <ul class="context-menu-subitems">\
          <li><input maxlength="2" type="text" placeholder="1"/><label>cards</label></li>\
        </ul>\
      </li>',

    shuffle: '<li><a href="#shuffle">Shuffle</a>',

    search: '<li><a href="#search">Search</a>',
  }
};
