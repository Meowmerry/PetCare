module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'matchjob',
			[
				{
					id: '1',
					date: '10/02/2020',
					rate: 100,
					provider_id: 1
				},
				{
					id: '2',
					date: '15/02/2020',
					rate: 100,
					provider_id: 1
				},
				{
					id: '3',
					date: '22/02/2020',
					rate: 100,
					provider_id: 1
				},{
					id: '4',
					date: '10/02/2020',
					rate: 120,
					provider_id: 2
				},
				{
					id: '5',
					date: '15/02/2020',
					rate: 120,
					provider_id: 2
				},
				{
					id: '6',
					date: '22/02/2020',
					rate: 120,
					provider_id: 2
				}
				,{
					id: '7',
					date: '10/02/2020',
					rate: 130,
					provider_id: 3
				},
				{
					id: '8',
					date: '15/02/2020',
					rate: 130,
					provider_id: 3
				},
				{
					id: '9',
					date: '22/02/2020',
					rate: 130,
					provider_id: 3
				}
				,{
					id: '10',
					date: '10/02/2020',
					rate: 130,
					provider_id: 4
				},
				{
					id: '11',
					date: '15/02/2020',
					rate: 130,
					provider_id: 4
				},
				{
					id: '12',
					date: '22/02/2020',
					rate: 130,
					provider_id: 4
				}
				,{
					id: '13',
					date: '10/02/2020',
					rate: 140,
					provider_id: 5
				},
				{
					id: '14',
					date: '15/02/2020',
					rate: 140,
					provider_id: 5
				},
				{
					id: '15',
					date: '22/02/2020',
					rate: 140,
					provider_id: 5
				}
				,{
					id: '16',
					date: '10/02/2020',
					rate: 150,
					provider_id: 6
				},
				{
					id: '17',
					date: '15/02/2020',
					rate: 150,
					provider_id: 6
				},
				{
					id: '18',
					date: '22/02/2020',
					rate: 150,
					provider_id: 6
				}
				,{
					id: '19',
					date: '10/02/2020',
					rate: 160,
					provider_id: 7
				},
				{
					id: '20',
					date: '15/02/2020',
					rate: 160,
					provider_id: 7
				},
				{
					id: '21',
					date: '22/02/2020',
					rate: 160,
					provider_id: 7
				}
				,{
					id: '22',
					date: '10/02/2020',
					rate: 170,
					provider_id: 8
				},
				{
					id: '23',
					date: '15/02/2020',
					rate: 170,
					provider_id: 8
				},
				{
					id: '24',
					date: '22/02/2020',
					rate: 170,
					provider_id: 8
				}
				,{
					id: '25',
					date: '10/02/2020',
					rate: 180,
					provider_id: 9
				},
				{
					id: '26',
					date: '15/02/2020',
					rate: 180,
					provider_id: 9
				},
				{
					id: '27',
					date: '22/02/2020',
					rate: 180,
					provider_id: 9
				}
				,{
					id: '28',
					date: '10/02/2020',
					rate: 190,
					provider_id: 10
				},
				{
					id: '29',
					date: '15/02/2020',
					rate: 190,
					provider_id: 10
				},
				{
					id: '30',
					date: '22/02/2020',
					rate: 190,
					provider_id: 10
				}
				,{
					id: '31',
					date: '10/02/2020',
					rate: 200,
					provider_id: 11
				},
				{
					id: '32',
					date: '15/02/2020',
					rate: 200,
					provider_id: 11
				},
				{
					id: '33',
					date: '22/02/2020',
					rate: 200,
					provider_id: 11
				}
				,{
					id: '34',
					date: '10/02/2020',
					rate: 250,
					provider_id: 12
				},
				{
					id: '35',
					date: '15/02/2020',
					rate: 250,
					provider_id: 12
				},
				{
					id: '36',
					date: '22/02/2020',
					rate: 250,
					provider_id: 12
				}
				
				
			],
			{}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('matchjobs', [{}]);
	}
};