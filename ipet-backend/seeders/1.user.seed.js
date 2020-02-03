module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "user",
      [
        {
          id: "0",
          firstname: "Unknown",
          lastname: "Admin",
          phone: "0990009999",
          email: "ipet0@ipet.com",
          password:"$2a$12$mX.4H8Rpt511L1GZen42S.Un.IuAp9538g4aqTtRfMXsnEsh8Af.K", // 1234
          address: "",
          district: "",
          province: "",
          user_image: "",
          balance: 0,
          role: "ADMIN",
          star: 0,
          count: 0
        },
        {
          id: "1",
          firstname: "Emma",
          lastname: "Olivia",
          phone: "0987654321",
          email: "ipet1@ipet.com",
          password:"$2a$12$mX.4H8Rpt511L1GZen42S.Un.IuAp9538g4aqTtRfMXsnEsh8Af.K", // 1234
          address: "80, Phatanavej 12 , Pridi Banomyong 14, Watthana",
          district: "Dindaeng",
          province: "Bangkok",
          user_image: "1579761528007.jpeg",
          balance: 10000,
          role: "USER",
          star: 3,
          count: 10
        },
        {
          id: "2",
          firstname: "Ava",
          lastname: "Mila",
          phone: "0967654322",
          email: "ipet2@ipet.com",
          password:"$2a$12$mX.4H8Rpt511L1GZen42S.Un.IuAp9538g4aqTtRfMXsnEsh8Af.K", // 1234
          address: "40, Sukhumvit 32 , Pridi Banomyong 14 , Sukhumvit 71",
          district: "Dindaeng",
          province: "Bangkok",
          user_image: "1579761829218.jpeg",
          balance: 10000,
          role: "USER",
          star: 4,
          count: 10
        },
        {
          id: "3",
          firstname: "Isabell",
          lastname: "Avery",
          phone: "0997654323",
          email: "ipet3@ipet.com",
          password:"$2a$12$mX.4H8Rpt511L1GZen42S.Un.IuAp9538g4aqTtRfMXsnEsh8Af.K", // 1234
          address: "60, Minburi 12 , Pridi Banomyong 14 , Sukhumvit 71",
          district: "Sathon",
          province: "Bangkok",
          user_image: "1579761911241.jpeg",
          balance: 10000,
          role: "USER",
          star: 4,
          count: 10
        },
        {
          id: "4",
          firstname: "Sophia",
          lastname: "Camila",
          phone: "0657654324",
          email: "ipet4@ipet.com",
          password:"$2a$12$mX.4H8Rpt511L1GZen42S.Un.IuAp9538g4aqTtRfMXsnEsh8Af.K", // 1234
          address: "70, Rachada 12 , Pridi Banomyong 14 , Sukhumvit 71",
          district: "Sathon",
          province: "Bangkok",
          user_image: "1579761992691.jpeg",
          balance: 10000,
          role: "USER",
          star: 5,
          count: 10
        },
        {
          id: "5",
          firstname: "Mia",
          lastname: "Victoria",
          phone: "0917654325",
          email: "ipet5@ipet.com",
          password:"$2a$12$mX.4H8Rpt511L1GZen42S.Un.IuAp9538g4aqTtRfMXsnEsh8Af.K", // 1234
          address: "20,  Pridi Banomyong 14 , Sukhumvit 71",
          district: "Sathon",
          province: "Bangkok",
          user_image: "1579762049106.jpeg",
          balance: 10000,
          role: "USER",
          star: 4,
          count: 10
        }
        ,
        {
          id: "6",
          firstname: "Victor",
          lastname: "Tskipper",
          phone: "0717654324",
          email: "ipet6@ipet.com",
          password:"$2a$12$mX.4H8Rpt511L1GZen42S.Un.IuAp9538g4aqTtRfMXsnEsh8Af.K", // 1234
          address: "35 Avenue Road, ahava montevideo",
          district: "Mueang Phuket",
          province: "Phuket",
          user_image: "1579762099642.jpeg",
          balance: 10000,
          role: "USER",
          star: 3,
          count: 10
        }
        ,
        {
          id: "7",
          firstname: "Jay",
          lastname: "Smith",
          phone: "0887654325",
          email: "ipet7@ipet.com",
          password:"$2a$12$mX.4H8Rpt511L1GZen42S.Un.IuAp9538g4aqTtRfMXsnEsh8Af.K", // 1234
          address: "256/109 Thalang, Banhuawit",
          district: "Thalang",
          province: "Phuket",
          user_image: "1579762152507.jpeg",
          balance: 10000,
          role: "USER",
          star: 4,
          count: 10
        }
        ,
        {
          id: "8",
          firstname: "Tim",
          lastname: "Musaka",
          phone: "0907654325",
          email: "ipet8@ipet.com",
          password:"$2a$12$mX.4H8Rpt511L1GZen42S.Un.IuAp9538g4aqTtRfMXsnEsh8Af.K", // 1234
          address: "290/ 78 Huehang Road.",
          district: "Thalang",
          province: "Phuket",
          user_image: "1579762204129.jpeg",
          balance: 10000,
          role: "USER",
          star: 4,
          count: 10
        }
        ,
        {
          id: "9",
          firstname: "Mario",
          lastname: "Victor",
          phone: "0817654325",
          email: "ipet9@ipet.com",
          password:"$2a$12$mX.4H8Rpt511L1GZen42S.Un.IuAp9538g4aqTtRfMXsnEsh8Af.K", // 1234
          address: "467/98 Change hay, Doy suthep",
          district: "Mueang Chiangmai",
          province: "Chiangmai",
          user_image: "1579762389475.jpeg",
          balance: 10000,
          role: "USER",
          star: 3,
          count: 10
        }
        ,
        {
          id: "10",
          firstname: "Hanna",
          lastname: "Natalia",
          phone: "0917656725",
          email: "ipet10@ipet.com",
          password:"$2a$12$mX.4H8Rpt511L1GZen42S.Un.IuAp9538g4aqTtRfMXsnEsh8Af.K", // 1234
          address: "217/98 Change hay, Doy suthep",
          district: "Mueang Chiangmai",
          province: "Chiangmai",
          user_image: "1579762275088.jpeg",
          balance: 10000,
          role: "USER",
          star: 3,
          count: 10
        }
        ,
        {
          id: "11",
          firstname: "Ferandro",
          lastname: "Handro",
          phone: "09576549254",
          email: "ipet11@ipet.com",
          password:"$2a$12$mX.4H8Rpt511L1GZen42S.Un.IuAp9538g4aqTtRfMXsnEsh8Af.K", // 1234
          address: "568/ 89 Hhewa, Change phueak",
          district: "Chang Phueak",
          province: "Chiangmai",
          user_image: "1579762493459.jpeg",
          balance: 10000,
          role: "USER",
          star: 5,
          count: 10
        }
        ,
        {
          id: "12",
          firstname: "Alejandro",
          lastname: "Mishaka",
          phone: "'0917608743",
          email: "ipet12@ipet.com",
          password:"$2a$12$mX.4H8Rpt511L1GZen42S.Un.IuAp9538g4aqTtRfMXsnEsh8Af.K", // 1234
          address: "868/ 8 Hhewa, Change phueak",
          district: "Chang Phueak",
          province: "Chiangmai",
          user_image: "1579762549193.jpeg",
          balance: 10000,
          role: "USER",
          star: 5,
          count: 10
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", [{}]);
  }
};
