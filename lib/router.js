Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'foodsAvailable'});
Router.route('/ShoppingList', {name: 'shoppingList'});
