module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'customer',
			[
				{
					id: '1',
					status: 'poke',
					choosePet:1,
					amount: 2,
					chooseService:1,
         			price: 800,
          			toTime: '14:00',
					fromTime: '10:00',					
					matchjob_id: 1,
					customer_id: 3
         		},
                {
					id: '2',
					status: 'poke',
					choosePet:1,
					amount: 1,
					chooseService:2,
         			price: 400,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 1,
					customer_id: 6
                },
                {
					id: '3',
					status: 'poke',
					choosePet:1,
					amount: 1,
					chooseService:2,
         			price: 400,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id:3,
					customer_id: 2
				},
				{
					id: '4',
					status: 'poke',
					choosePet:1,
					amount: 2,
					chooseService:1,
         			price: 960,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 4,
					customer_id: 12
                },
                {
					id: '5',
					status: 'poke',
					choosePet:2,
					amount: 1,
					chooseService:2,
         			price: 480,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 4,
					customer_id: 8
                },
                {
					id: '6',
					status: 'poke',
					choosePet:2,
					amount: 1,
					chooseService:2,
         			price: 480,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id:5,
					customer_id: 7
				},{
					id: '7',
					status: 'poke',
					choosePet:1,
					amount: 2,
					chooseService:1,
         			price: 1040,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 7,
					customer_id: 11
                },
                {
					id: '8',
					status: 'poke',
					choosePet:1,
					amount: 1,
					chooseService:2,
         			price: 520,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 7,
					customer_id: 6
                },
                {
					id: '9',
					status: 'poke',
					choosePet:1,
					amount: 1,
					chooseService:2,
         			price: 520,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id:9,
					customer_id: 5
				},{
					id: '10',
					status: 'poke',
					choosePet:1,
					amount: 2,
					chooseService:1,
         			price: 1040,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 10,
					customer_id: 1
                },
                {
					id: '11',
					status: 'poke',
					choosePet:1,
					amount: 1,
					chooseService:2,
         			price: 520,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 10,
					customer_id: 6
                },
                {
					id: '12',
					status: 'poke',
					choosePet:2,
					amount: 1,
					chooseService:2,
         			price: 520,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id:12,
					customer_id: 12
				}
				,{
					id: '13',
					status: 'poke',
					choosePet:1,
					amount: 2,
					chooseService:1,
         			price: 1120,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 13,
					customer_id: 4
                },
                {
					id: '14',
					status: 'poke',
					choosePet:1,
					amount: 1,
					chooseService:2,
         			price: 560,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 13,
					customer_id: 9
                },
                {
					id: '15',
					status: 'poke',
					choosePet:1,
					amount: 1,
					chooseService:2,
         			price: 560,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id:15,
					customer_id: 10
				},{
					id: '16',
					status: 'poke',
					choosePet:1,
					amount: 2,
					chooseService:1,
         			price: 1200,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 16,
					customer_id: 12
                },
                {
					id: '17',
					status: 'poke',
					choosePet:1,
					amount: 1,
					chooseService:2,
         			price: 600,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 16,
					customer_id: 8
                },
                {
					id: '18',
					status: 'poke',
					choosePet:2,
					amount: 1,
					chooseService:2,
         			price: 600,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id:18,
					customer_id: 11
				}
				,{
					id: '19',
					status: 'poke',
					choosePet:1,
					amount: 2,
					chooseService:1,
         			price: 1280,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 19,
					customer_id: 6
                },
                {
					id: '20',
					status: 'poke',
					choosePet:1,
					amount: 1,
					chooseService:2,
         			price: 640,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 19,
					customer_id: 8
                },
                {
					id: '21',
					status: 'poke',
					choosePet:1,
					amount: 1,
					chooseService:2,
         			price: 640,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id:21,
					customer_id: 10
				}
				,{
					id: '22',
					status: 'poke',
					choosePet:1,
					amount: 2,
					chooseService:1,
         			price: 1360,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 22,
					customer_id: 5
                },
                {
					id: '23',
					status: 'poke',
					choosePet:2,
					amount: 1,
					chooseService:2,
         			price: 680,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 22,
					customer_id: 12
                },
                {   id: '24',
					status: 'poke',
					choosePet:2,
					amount: 1,
					chooseService:2,
         			price: 680,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id:24,
					customer_id: 11
				}	,{
					id: '25',
					status: 'poke',
					choosePet:1,
					amount: 2,
					chooseService:1,
         			price: 1440,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 25,
					customer_id: 1
                },
                {
					id: '26',
					status: 'poke',
					choosePet:1,
					amount: 1,
					chooseService:2,
         			price: 720,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 25,
					customer_id: 3
                },
                {
					id: '27',
					status: 'poke',
					choosePet:1,
					amount: 1,
					chooseService:2,
         			price: 720,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id:27,
					customer_id: 10
				},{
					id: '28',
					status: 'poke',
					choosePet:1,
					amount: 2,
					chooseService:1,
         			price: 1520,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 28,
					customer_id: 3
                },
                {
					id: '29',
					status: 'poke',
					choosePet:2,
					amount: 1,
					chooseService:2,
         			price: 760,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 28,
					customer_id: 9
                },
                {
					id: '30',
					status: 'poke',
					choosePet:2,
					amount: 1,
					chooseService:2,
         			price: 760,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id:30,
					customer_id: 8
				}
				,{
					id: '31',
					status: 'poke',
					choosePet:1,
					amount: 2,
					chooseService:1,
         			price: 1600,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 31,
					customer_id: 5
                },
                {
					id: '32',
					status: 'poke',
					choosePet:1,
					amount: 1,
					chooseService:2,
         			price: 800,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 31,
					customer_id: 7
                },
                {
					id: '33',
					status: 'poke',
					choosePet:1,
					amount: 1,
					chooseService:2,
         			price: 800,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id:33,
					customer_id: 9
				},{
					id: '34',
					status: 'poke',
					choosePet:1,
					amount: 2,
					chooseService:1,
         			price: 2000,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 34,
					customer_id: 1
                },
                {
					id: '35',
					status: 'poke',
					choosePet:1,
					amount: 1,
					chooseService:2,
         			price: 1000,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id: 34,
					customer_id: 5
                },
                {
					id: '36',
					status: 'poke',
					choosePet:2,
					amount: 1,
					chooseService:2,
         			price: 1000,
          			toTime: '14:00',
					fromTime: '10:00',	
					matchjob_id:36,
					customer_id: 2
				}
			],
			{}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('customers', [{}]);
	}
};