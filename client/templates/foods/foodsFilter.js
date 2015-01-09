Template.foodsFilter.helpers({
  foodFilters: function () {
    return Foods.distinct("foodCategory");
  }
});
