const enhancer = require('./enhancer.js');
// test away!

// Object used for initial testing of each function
const item = {
	name: 'football',
	enhancement: 12,
	durability: 62,
};

describe('enhancer unit tests', () => {
	describe('repair() function test', () => {
		it('test repair() function', () => {
			// Calling the repair() function should result in the item's durability to be 100
			expect(enhancer.repair(item).durability).toBe(100); // 62 to 100
		});
	});

	describe('succeed() function tests',  () => {
		it('test succeed() function when enhancement is less than 20', () => {
			// Enhancement is 12 after running succeed() the enhancement should be 13
			expect(enhancer.succeed(item).enhancement).toBe(13); // 12 to 13
		});

		it('test succeed() function when enhancement is equal to 20', () => {
			const newItem = {
				...item,
				enhancement: 20,
			};
			// Enhancement is now 20 after running succeed() the enhancement value should remain 20
			expect(enhancer.succeed(newItem).enhancement).toBe(20); // 20 to 20
		});
	});

	describe('fail() function tests', () => {
		it('test fail() function when enhancement less than 15', () => {
			// Enhancement of item is 12 so durability should decrease by 5 from 62 to 57
			expect(enhancer.fail(item).durability).toBe(57); // 62 to 57
		});

		it('test fail() function when enhancement is equal to 15', () => {
			const newItem = {
				...item,
				enhancement: 15,
				durability: 32,
			};
			// Enhancement is 15 so durability should decrease by 10
			expect(enhancer.fail(newItem).durability).toBe(22); // 32 to 22
		});

		it('test fail() function when enhancement is greater than 16', () => {
			const newItem = {
				...item,
				enhancement: 18,
				durability: 75,
			};
			// Enhancement of newItem is 18 so durability decreases by 10 and enhancement decreases by 1
			expect(enhancer.fail(newItem).enhancement).toBe(17); // 18 to 17
			expect(enhancer.fail(newItem).durability).toBe(65); // 75 to 65
		});
	});
});