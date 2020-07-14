const enhancer = require('./enhancer.js');
// test away!

// Object used for initial testing for each function
const item = {
	name: 'football',
	enhancement: 12,
	durability: 62,
};

describe('enhancer unit tests', () => {
	describe('repair function test', () => {
		it('test repair function', () => {
			// Calling the repair function should result in the item's durability to be 100
			expect(enhancer.repair(item).durability).toBe(100); // 62 to 100
		});
	});
});