Template.foodsFilter.helpers({
  foodFilters: function () {
    console.log(Foods.find({}, {fields: {foodCategory:1, _id: 0}}));
  }
});
