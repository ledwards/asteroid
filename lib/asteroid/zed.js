Asteroid.Players = new Meteor.Collection("Players");
Asteroid.Collection = {
  Dark: {
    ReserveDeck: new Asteroid.Pile("DarkReserveDeck"),
    ForcePile: new Asteroid.Pile("DarkForcePile"),
    UsedPile: new Asteroid.Pile("DarkUsedPile"),
    LostPile: new Asteroid.Pile("DarkLostPile"),
    Table: new Meteor.Collection("DarkTable"),
    Hand: new Meteor.Collection("DarkHand"),
  },
  Light: {
    ReserveDeck: new Asteroid.Pile("LightReserveDeck"),
    ForcePile: new Asteroid.Pile("LightForcePile"),
    UsedPile: new Asteroid.Pile("LightUsedPile"),
    LostPile: new Asteroid.Pile("LightLostPile"),
    Table: new Meteor.Collection("LightTable"),
    Hand: new Meteor.Collection("LightHand"),
  }
};
