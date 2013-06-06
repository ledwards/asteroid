Meteor.startup(function () {
  imageRoot = "http://s3.amazonaws.com/ledwards-swccgvkit-production/card_images/"

  Asteroid.Collection.Dark.Table.remove({});
  Asteroid.Collection.Dark.ReserveDeck.remove({});
  Asteroid.Collection.Dark.LostPile.remove({});
  Asteroid.Collection.Dark.UsedPile.remove({});

  Asteroid.Collection.Light.Table.remove({});
  Asteroid.Collection.Light.ReserveDeck.remove({});
  Asteroid.Collection.Light.LostPile.remove({});
  Asteroid.Collection.Light.UsedPile.remove({});

  Asteroid.Players.remove({});

  randomNumbers = _.shuffle(_.range(60));
  for(i = 0; i < 60; i++) {
    Asteroid.Collection.Dark.ReserveDeck.insert({index: i, frontImageURL: imageRoot + (randomNumbers[i] * 5 + 1700) + "/thumbnail.gif", side: "Dark"});
    Asteroid.Collection.Light.ReserveDeck.insert({index: i, frontImageURL: imageRoot + (randomNumbers[i] * 5 + 100) + "/thumbnail.gif", side: "Light"});
  };

  Asteroid.Collection.Dark.LostPile.insert({index: 0, frontImageURL: imageRoot + "2964/thumbnail.gif"});
  Asteroid.Collection.Light.LostPile.insert({index: 0, frontImageURL: imageRoot + "964/thumbnail.gif"});

  Asteroid.Players.insert({ name: "Player 1", side: "Dark" });
  Asteroid.Players.insert({ name: "Player 2", side: "Light" });
});
