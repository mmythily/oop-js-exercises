class Pizza {           // has two methods-base and add Topping and 1 property - toppings
    constructor(size, crust) {
        this.size = size;
        this.crust = crust;
        this.toppings = ['cheese']
    }
    addTopping(topping) {
        this.toppings.push(topping)
    }
    // setSize now includes data validation
    setSize(size) {
        if (size === 's' || size === 'm' || size === 'l') {
            this.size = size;
        }
        // else we could throw an error, return false, etc.
        // We choose here to ignore all other values!
    }
    getSize() {
        return this.size;
    }
}

// DRIVER CODE
const pizza = new Pizza();
pizza.setSize('m');
//pizza.getSize(); 
pizza.setSize('l');

console.log(pizza)