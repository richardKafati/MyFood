Template.foodsFilter.helpers({
  foodFilters: function () {
    FoodsDbFoodCategoriesAndIDsNotUnique = Foods.find({}, {fields: {foodCategory: 1}}).fetch();
    console.log(FoodsDbFoodCategoriesAndIDsNotUnique);
    FoodsDbFoodCategoriesNotUnique = _.map(FoodsDbFoodCategoriesAndIDsNotUnique, function (document) {
      delete document._id;
      return document;
    });
    console.log(FoodsDbFoodCategoriesNotUnique);
    FoodsDbFoodCategories = _.uniq(FoodsDbFoodCategoriesNotUnique);
    console.log(FoodsDbFoodCategories);
  }
});
