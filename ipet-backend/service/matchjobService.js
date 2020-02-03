const moment = require("moment");
const passport = require("passport");

function chenageStringToDate(result) {
  console.log(result)
  return result.map((aunnung) => ({
    ...aunnung,
    date: aunnung.date.split("/").reverse().join("-")
  })).sort(mySort).map((aunnung) => ({
    ...aunnung,
    date: aunnung.date.split("-").reverse().join("/")
  }))
}

mySort = (a, b) => {
  if (a.date < b.date) {
    return 1;
  }
  if (a.date > b.date) {
    return -1;
  }

  // names must be equal
  return 0;
}

module.exports = (app, db) => {
  app.get("/matchjob", async (req, res) => {
    try {
      let result = await db.matchjob.findAll({
        include: [
          {
            model: db.user,
            as: "providerId"
          }
        ]
      });
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });

  app.get("/matchjobfilter", async (req, res) => {
    try {
      let result = await db.matchjob.findAll({
        include: [
          {
            model: db.user,
            as: "providerId",
            attributes: ["district", "province"],
            include: [
              {
                model: db.takecareof,
                attributes: ["animal_id"],
              },
              {
                model: db.serviceof,
                attributes: ["service_id"],
              },
            ]
          }
        ]
      });
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });

  app.get(
    "/allMatchjobsByUserId",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      try {
        let result = await db.matchjob.findAll({
          where: { provider_id: req.user.id },
          attributes: ["id", "date", "rate"],
          // order: [['date', 'DESC']],
          include: [
            {
              model: db.customer,
              as: "customers",
              attributes:
                [
                  "id","status", "choosePet", "amount", "chooseService", 
                  "fromTime", "toTime", "price", "detail",
                ],
              include: [
                {
                  model: db.user,
                  as: "customer",
                  attributes: ["id", "user_image", "firstname", "lastname", "phone", "balance"]
                }
              ]
            },
            {
              model: db.user,
              as: "providerId",
              attributes: ["id", "firstname", "lastname"]
            }
          ]
        });
        res.status(200).send(chenageStringToDate(result.map(item => item.dataValues)));
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
    }
  );

  app.post(
    "/createJob",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      try {
        let result = await db.matchjob.create({
          date: req.body.date,
          rate: req.body.rate,
          provider_id: req.user.id
        });
        res.status(201).send({ message: "create success" });
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
    }
  );

  app.delete(
    "/deleteJob/:id",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      try {
        await db.matchjob.destroy({ where: { id: req.params.id } });
        res.status(201).send({ message: "delete success" });
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
    }
  );

  app.get("/getAllMatchJobByCustomer", async (req, res) => {
    try {
      let result = await db.matchjob.findAll({
        include: [
          {
            model: db.user,
            as: "providerId",
            attributes: ["id","firstname","lastname","phone","address","district", "province","user_image","star","count"],
            include: [
              {
                model: db.takecareof,
                attributes: ["animal_id"],
                include: [{ model: db.animal }]
              },
              {
                model: db.serviceof,
                attributes: ["service_id"],
                include: [{ model: db.service }]
              },
            ]
          }
        ]
      });
      res.status(200).send(chenageStringToDate(result.map(item => item.dataValues)));
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });

  app.post("/getstarbyid", passport.authenticate("jwt", {session: false}),
    async (req, res) => {
      try {
        let result = await db.user.findOne({where: {id: req.body.userId}
        })
        res.status(200).send(result)
      } catch (error) {
        res.status(400).send({ message: error.message })
      }
    }
  )

  app.put("/updatestar", passport.authenticate("jwt", {session: false}),
  async (req, res) =>{
    try{
        let result = await db.user.update({
          star: req.body.star,
          count: req.body.count
        },{
          where: {id: req.body.userId}
        })
        res.status(200).send(result.data)
    }catch{
      res.status(400).send({ message: error.message })
    }

  })

};
