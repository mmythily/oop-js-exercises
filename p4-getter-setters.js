class Pizza {           // has two methods-base and add Topping and 1 property - toppings
    constructor(size, crust) {
        this.size = size;
        this.crust = crust;
        this.toppings = ['cheese']
    }
    addTopping(topping) {
        this.toppings.push(topping)
    }
    set size(size) {
        if (size === 's' || size === 'm' || size === 'l') {
            this._size = size;
        }
    }
    get price() {
        const basePrice = 10;
        const toppingPrice = 2;
        return basePrice + this.toppings.length * toppingPrice;
    }
}

// DRIVER CODE
const pizza = new Pizza();
pizza.setSize('m');
//pizza.getSize(); 
pizza.setSize('l');

console.log(pizza)