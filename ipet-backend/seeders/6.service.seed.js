module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'service',
			[
				{
					id: '1',
					service: 'Walking',
					imgservice_url: 'https://uppicimg.com/file/JbF65R0k.png',
				},
				{
					id: '2',
					service: 'Sitting',
					imgservice_url: 'https://uppicimg.com/file/Pr69BEgG.png',
				},
			],
			{}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('services', [{}]);
	}
};