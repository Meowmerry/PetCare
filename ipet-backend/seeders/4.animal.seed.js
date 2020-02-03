module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'animal',
			[
				{
					id: '1',
					animal: 'Cat',
					imganimal_url: 'https://uppicimg.com/file/EWRGCH8y.png',
				},
				{
					id: '2',
					animal: 'Dog',
					imganimal_url: 'https://uppicimg.com/file/7qJ6ug3Y.png',
				},
			],
			{}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('animals', [{}]);
	}
};