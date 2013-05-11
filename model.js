Table = new Meteor.Collection("cards");
ReserveDeck = new Meteor.Collection("reserve_deck");

ReserveDeck.moveToTable = function(x, y) {
  card = ReserveDeck.findOne({},{sort: {index: 1}});
  Table.insert(card);
  Table.update(card._id, {$set: {x: x, y: y}})
  ReserveDeck.remove(card._id);
}
