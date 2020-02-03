module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'takecareof',
			[
				{
					id: '1',
					user_id: 1,
					animal_id: 1
                },
                {
					id: '2',
					user_id: 1,
					animal_id: 2
                },
                {
					id: '3',
					user_id: 2,
					animal_id: 1
                },{
					id: '4',
					user_id: 2,
					animal_id: 2
                },
                {
					id: '5',
					user_id: 3,
					animal_id: 1
                },
                {
					id: '6',
					user_id: 3,
					animal_id: 2
                },{
					id: '7',
					user_id: 4,
					animal_id: 1
                },
                {
					id: '8',
					user_id: 4,
					animal_id: 2
                },
                {
					id: '9',
					user_id: 5,
					animal_id: 1
                },{
					id: '10',
					user_id: 5,
					animal_id: 2
                },
                {
					id: '11',
					user_id: 6,
					animal_id: 1
                },
                {
					id: '12',
					user_id: 6,
					animal_id: 2
                },{
					id: '13',
					user_id: 7,
					animal_id: 1
                },
                {
					id: '14',
					user_id: 8,
					animal_id: 1
                },
                {
					id: '15',
					user_id: 9,
					animal_id: 1
                },{
					id: '16',
					user_id: 10,
					animal_id: 2
                },
                {
					id: '17',
					user_id: 11,
					animal_id: 2
                },
                {
					id: '18',
					user_id: 12,
					animal_id: 2
                }
			],
			{}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('takecareofs', [{}]);
	}
};