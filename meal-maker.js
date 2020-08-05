const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;  
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
    get desserts() {
      return this._courses.desserts;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizers = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and total price is ${totalPrice}`;
  } 
};

menu.addDishToCourse('appetizers', 'fries', 3.5);
menu.addDishToCourse('appetizers', 'onion rings', 5.5);
menu.addDishToCourse('appetizers', 'cheese sticks', 4.5);

menu.addDishToCourse('mains', 'garlic shrimp', 10.5);
menu.addDishToCourse('mains', 'garlic fish', 14.5);
menu.addDishToCourse('mains', 'garlic steak', 16.5);

menu.addDishToCourse('desserts', 'ice cream', 5.5);
menu.addDishToCourse('desserts', 'flan', 3.5);
menu.addDishToCourse('desserts', 'cake', 2.5);

const meal = meal.generateRandomMeal;
console.log(meal);