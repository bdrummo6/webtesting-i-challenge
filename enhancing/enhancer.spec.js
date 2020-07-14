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
		// Calling the repair() function should result in the item's durability to be 100 and enhancement should remain 12
		it('test repair() function', () => {
			expect(enhancer.repair(item).name).toBe('football'); // 'football' to 'football'
			expect(enhancer.repair(item).enhancement).toBe(12); // 12 to 12
			expect(enhancer.repair(item).durability).toBe(100); // 62 to 100
		});
	});

	describe('succeed() function tests',  () => {
		// Enhancement is 12 after running succeed() the enhancement should be 13 and durability should remain 62
		it('test succeed() function when enhancement is less than 20', () => {
			expect(enhancer.succeed(item).name).toBe('football'); // 'football' to 'football'
			expect(enhancer.succeed(item).enhancement).toBe(13); // 12 to 13
			expect(enhancer.succeed(item).durability).toBe(62); // 62 to 62
		});

		// Enhancement is 20 and after running succeed() the enhancement should remain 20 and durability remain 62
		it('test succeed() function when enhancement is equal to 20', () => {
			const newItem = {
				...item,
				enhancement: 20,
			};
			expect(enhancer.succeed(newItem).name).toBe('football'); // 'football' to 'football
			expect(enhancer.succeed(newItem).enhancement).toBe(20); // 20 to 20
			expect(enhancer.succeed(newItem).durability).toBe(62); // 62 to 62
		});
	});

	describe('fail() function tests', () => {
		// Enhancement of item is 12 so durability should decrease by 5 from 62 to 57 and enhancement remains 12
		it('test fail() function when enhancement less than 15', () => {
			expect(enhancer.fail(item).name).toBe('football'); // 'football' to 'football
			expect(enhancer.fail(item).enhancement).toBe(12); // 12 to 12
			expect(enhancer.fail(item).durability).toBe(57); // 62 to 57
		});

		// Enhancement is 15 so durability should decrease by 10 and enhancement and enhancement should remain 15
		it('test fail() function when enhancement is equal to 15', () => {
			const newItem = {
				...item,
				enhancement: 15,
				durability: 32,
			};
			expect(enhancer.fail(newItem).name).toBe('football'); // 'football' to 'football
			expect(enhancer.fail(newItem).enhancement).toBe(15); // 15 to 15
			expect(enhancer.fail(newItem).durability).toBe(22); // 32 to 22
		});

		// Enhancement is 18 so durability decreases by 10 and enhancement decreases by 1
		it('test fail() function when enhancement is greater than 16', () => {
			const newItem = {
				...item,
				enhancement: 18,
				durability: 75,
			};
			expect(enhancer.fail(newItem).name).toBe('football'); // 'football' to 'football
			expect(enhancer.fail(newItem).enhancement).toBe(17); // 18 to 17
			expect(enhancer.fail(newItem).durability).toBe(65); // 75 to 65
		});
	});
});