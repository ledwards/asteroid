Meteor.startup(function () {
  if (Cards.find().count() === 0) {
    Cards.insert({x: 0, y: 0, src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT9ByLHcNbFBrL2uL5_SVUcSVcVJl20IoC-O1ZQompQ_KDewu5Cqw"});
  }
});
