Template.food.events({
  "click .delete": function () {
    Foods.remove(this._id);
  }
});
