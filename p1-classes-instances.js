class Pizza {           // has two methods-base and add Topping and 1 property - toppings
    constructor(size, crust) {
        this.size = size;
        this.crust = crust;
        this.toppings = ['cheese']
    }
    addTopping(topping) {
        this.toppings.push(topping)
    }
}
let pizza1 = new Pizza('small','deep dish');
pizza1.addTopping('mushrooms')
pizza1.addTopping('jalapeno')
pizza1.addTopping('sun dried tomatoes')

let pizza2 = new Pizza('large','thin');
pizza2.addTopping('mushrooms')
pizza2.addTopping('jalapeno')

console.log('pizza1: ', pizza1);
console.log('pizza2: ', pizza2);