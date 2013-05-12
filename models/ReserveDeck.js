ReserveDeck = new Meteor.Collection("reserveDeck");

ReserveDeck.moveToTable = function(x, y) {
  card = ReserveDeck.findOne({},{sort: {index: 1}});
  Table.insert(card);
  Table.update(card._id, {$set: {x: x, y: y}})
  ReserveDeck.remove(card._id);
}

ReserveDeck.isEmpty = function() {
  return ReserveDeck.find({}).count() == 0;
}
