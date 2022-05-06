const Potion = require('../lib/Potion');
const Character = require('./Character');

class Player extends Character {
    constructor(name = ''){

    // call parent constructor
    super(name);

    this.inventory = [new Potion('health'), new Potion()];
}

// inherit prototype methods from Character
// Player.prototype = Object.create(Character.prototype);

// returns an object with various player properties
getStats() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

// returns the inventory array or false if empty
getInventory() {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};   

addPotion(potion) {
    this.inventory.push(potion);
};

usePotion(index) {
    // remove a signel potion from original inventory array at specified index and put into new array
    // then potion at index 0 of the new array is saved in the potion variable
    const potion = this.getInventory().splice(index, 1)[0];

    switch (potion.name) {
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
    }
};

};

module.exports = Player;