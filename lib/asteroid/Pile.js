Asteroid.Pile = function(name) {
  collection = new Meteor.Collection(name);

  collection.friendlyPile = function(name){
    var side = this._name.match("Dark") ? Asteroid.Collection.Dark : Asteroid.Collection.Light;
    return side[name];
  };

  collection.moveToTable = function(table, x, y) {
    card = this.topCard();
    if (card) {
      table.insert(card);
      table.update(card._id, {$set: {x: x, y: y}})
      this.remove(card._id);
    }
  };

  collection.addToTop = function(card, sourceCollection) {
    typeof(sourceCollection) !== undefined ? sourceCollection : Table;

    index = this.topCard() ? this.topCard().index + 1 : 0;
    sourceCollection.update(card._id, {$set: {index: index}});
    card = sourceCollection.findOne(card._id); // reload
    this.insert(card);
    sourceCollection.remove(card._id);
  };;

  collection.isEmpty = function() {
    return this.find({}).count() == 0;
  };

  collection.topCard = function() {
    return this.findOne({},{sort: {index: -1}});
  };

  collection.bottomCard = function() {
    return this.findOne({},{sort: {index: 1}});
  };

  collection.topNCards = function(n) {
    return this.find({},{sort: {index: -1}, limit: n});
  };

  collection.shuffle = function() {
    var collection = this;
    var cards = collection.find({});
    var randomIndices = _.shuffle(_.range(cards.count()));
    var i = 0;
    cards.forEach(function(card){
      collection.update(card._id, {$set: {index: randomIndices[i]}});
      i++;
    });
  };

  collection.draw = function(n) {
    var collection = this;
    var pile = collection.friendlyPile("Hand");

    _.each(_.range(n), function() {
      var card = collection.topCard();
      if (card) {
        pile.insert(card);
        collection.remove(card._id);
      }
    });
  };

  collection.lose = function(n) {
    var collection = this;
    var pile = collection.friendlyPile("LostPile");

    _.each(_.range(n), function() {
      var card = collection.topCard();
      if (card) {
        pile.insert(card);
        collection.remove(card._id);
      }
    });
  };

  collection.activate = function(n) {
    var collection = this;
    var pile = collection.friendlyPile("ForcePile");

    _.each(_.range(n), function() {
      var card = collection.topCard();
      if (card) {
        pile.insert(card);
        collection.remove(card._id);
      }
    });
  };

  collection.use = function(n) {
    var collection = this;
    var pile = collection.friendlyPile("UsedPile");

    _.each(_.range(n), function() {
      var card = collection.topCard();
      if (card) {
        pile.insert(card);
        collection.remove(card._id);
      }
    });
  };

  collection.retrieve = function(n) {
    var collection = this;
    var pile = collection.friendlyPile("UsedPile");

    _.each(_.range(n), function() {
      var card = collection.topCard();
      if (card) {
        pile.insert(card);
        collection.remove(card._id);
      }
    });
  };

  return collection;
};
