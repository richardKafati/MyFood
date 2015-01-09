Template.foodEntry.events({
  "submit .submit-food": function () {
    event.preventDefault();
    console.dir(event);
    food = event.target.food.value;
    foodCategory = event.target.foodCategory.value;
    Foods.insert(
      {
        food: food,
        foodCategory: foodCategory
      }
    );
    event.target.food.value = "";
    event.target.foodCategory.value = "";
  }
});
