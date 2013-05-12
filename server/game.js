Meteor.startup(function () {
  var imageRoot = "http://s3.amazonaws.com/ledwards-swccgvkit-production/card_images/"

  Table.remove({});
  ReserveDeck.remove({});

  ReserveDeck.insert({index: 0, frontImageURL: imageRoot + "101/thumbnail.gif"});
  ReserveDeck.insert({index: 1, frontImageURL: imageRoot + "102/thumbnail.gif"});
  ReserveDeck.insert({index: 2, frontImageURL: imageRoot + "103/thumbnail.gif"});
});
