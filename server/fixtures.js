if (Foods.find().count() === 0) {
  Foods.insert(
    {
      food: "banana",
      foodCategory: "Fruit"
    }
  );
  Foods.insert(
    {
      food: "pumpkin",
      foodCategory: "Starch"
    }
  );
  Foods.insert(
    {
      food: "lentil",
      foodCategory: "Beans"
    }
  );
  Foods.insert(
    {
      food: "lettuce",
      foodCategory: "Greens"
    }
  );
}
