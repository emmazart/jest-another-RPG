const Potion = require('../lib/Potion');
const Character = require('./Character');

function Player(name = ''){
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];
}

// inherit prototype methods from Character
Player.prototype = Object.create(Character.prototype);

// returns an object with various player properties
Player.prototype.getStats = function() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

// returns the inventory array or false if empty
Player.prototype.getInventory = function () {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};   

Player.prototype.addPotion = function (potion) {
    this.inventory.push(potion);
};

Player.prototype.usePotion = function (index) {
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

module.exports = Player;