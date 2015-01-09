Template.foodsAvailable.helpers({
  foods: function () {
    return Foods.find();
  }
});
