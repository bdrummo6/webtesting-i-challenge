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

	describe('succeed function tests',  () => {
		it('test succeed function when enhancement is less than 20', () => {
			// Enhancement is 12 after running succeed the enhancement should be 13
			expect(enhancer.succeed(item).enhancement).toBe(13); // 12 to 13
		});

		it('test succeed function when enhancement is equal to 20', () => {
			const newItem = {
				...item,
				enhancement: 20,
			};
			// Enhancement is now 20 after running succeed the enhancement value should remain 20
			expect(enhancer.succeed(newItem).enhancement).toBe(20); // 20 to 20
		});
	});
});