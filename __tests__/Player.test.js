const Player = require('../lib/Player.js');
// import potion constructor to test so new keyword doesn't throw an error
const Potion = require('../lib/Potion.js');
// mock/replace potion constructor's implementation with faked data
jest.mock('../lib/Potion');


test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});