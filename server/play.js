Meteor.startup(function () {
  var imageRoot = "http://s3.amazonaws.com/ledwards-swccgvkit-production/card_images/"

  DarkTable.remove({});
  DarkReserveDeck.remove({});
  DarkLostPile.remove({});
  DarkUsedPile.remove({});

  LightTable.remove({});
  LightReserveDeck.remove({});
  LightLostPile.remove({});
  LightUsedPile.remove({});

  Players.remove({});

  randomNumbers = _.shuffle(_.range(60));
  for(i = 0; i < 60; i++) {
    DarkReserveDeck.insert({index: i, frontImageURL: imageRoot + (randomNumbers[i] * 5 + 1700) + "/thumbnail.gif"});
    LightReserveDeck.insert({index: i, frontImageURL: imageRoot + (randomNumbers[i] * 5 + 100) + "/thumbnail.gif"});
  };

  DarkLostPile.insert({index: 0, frontImageURL: imageRoot + "2964/thumbnail.gif"});
  LightLostPile.insert({index: 0, frontImageURL: imageRoot + "964/thumbnail.gif"});

  Players.insert({name: "Player 1", side: "dark", reserveDeck: DarkReserveDeck});
  Players.insert({name: "Player 2", side: "light", reserveDeck: LightReserveDeck});
});
