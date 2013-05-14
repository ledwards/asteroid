Meteor.startup(function () {
  var imageRoot = "http://s3.amazonaws.com/ledwards-swccgvkit-production/card_images/"

  Table.remove({});
  ReserveDeck.remove({});

  randomNumbers = _.shuffle(_.range(60));
  for(i = 0; i < 60; i++) {
    ReserveDeck.insert({index: i, frontImageURL: imageRoot + (randomNumbers[i] * 5 + 1700) + "/thumbnail.gif"});
  }
});
