Meteor.Router.add({
  "/tests": "tests",
  "/": "game",
  "*": "not_found"
});
