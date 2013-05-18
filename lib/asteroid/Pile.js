Asteroid.Pile = function(name) {
  collection = new Meteor.Collection(name);

  collection.moveToTable = function(x, y) {
    card = this.topCard();
    if (card) {
      Table.insert(card);
      Table.update(card._id, {$set: {x: x, y: y}})
      this.remove(card._id);
    }
  }

  collection.addToTop = function(card) {
    index = this.topCard() ? this.topCard().index + 1 : 0;
    Table.update(card._id, {$set: {index: index}});
    card = Table.findOne(card._id); // reload
    this.insert(card);
    Table.remove(card._id);
  }

  collection.isEmpty = function() {
    return this.find({}).count() == 0;
  }

  collection.topCard = function() {
    return this.findOne({},{sort: {index: -1}});
  }

  collection.bottomCard = function() {
    return this.findOne({},{sort: {index: 1}});
  }

  return collection;
};
