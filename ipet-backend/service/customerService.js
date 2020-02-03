const passport = require("passport")

function chenageStringToDate(result) {
    console.log(result.dataValues)
    return result.map((aunnung) => ({
      ...aunnung,
      date: aunnung.customers.date.split("/").reverse().join("-")
    }))
    .sort(mySort).map((aunnung) => ({
      ...aunnung,
      date: aunnung.customers.date.split("-").reverse().join("/")
    }))
  }
//   res.status(200).send(result.map(item=>item.customers.date))

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

    app.put("/updateStatusPokeToAccept/:id", 
        passport.authenticate('jwt', { session: false }),
        async (req, res) => {
            try {
                let result = await db.customer.findOne({
                    where: { id: req.params.id }
                })
                if (!result) {
                    res.status(404).send('Not Found Customer')
                } else {
                    await result.update({ status: 'accept' })
                    res.status(200).send({ message: 'update success' })
                }     
            } catch (error) {
                res.status(400).send({ message: error.message })
            }
            
        }
    );

    app.delete("/rejectCustomer/:matchjob_id/:customer_id",
        passport.authenticate('jwt', { session: false }),
        async (req, res) => {
            try {
                await db.customer.destroy({
                    where: {
                        matchjob_id: req.params.matchjob_id,
                        customer_id: req.params.customer_id
                    } 
                })
                res.status(200).send({ message: 'delete success' })    
            } catch (error) {
                res.status(400).send({ message: error.message })
            }
        }
    )

    app.put("/updateStatusAcceptToFinish/:id", 
        passport.authenticate('jwt', { session: false }),
        async (req, res) => {
            try {
                let result = await db.customer.findOne({
                    where: { id: req.params.id }
                })
                if (!result) {
                    res.status(404).send({ message: "404 Hire Job not found" })
                } else {
                    await result.update({ status: 'finish' })
                    res.status(200).send({ message: "update success" })
                }    
            } catch (error) {
                res.status(400).send({ message: error.message })
            }
            
        }
    );
    
    app.post("/hireMatchJob/:matchjob_id", 
        passport.authenticate('jwt', { session: false }),
        async (req,res) => {
            try {
                let result = await db.customer.create({
                    status: 'poke',
                    choosePet: req.body.choosePet,
                    amount: req.body.amount,
                    chooseService: req.body.chooseService,
                    toTime: req.body.toTime,
                    fromTime: req.body.fromTime,
                    price: req.body.price,
                    detail: '',
                    matchjob_id: req.params.matchjob_id,
                    customer_id: req.user.id
                })
                res.status(201).send(result)
            } catch (error) {
                res.status(400).send({ message: error.message })
            }
        }
    )

    app.get("/getAllHireMatchJobByCustomerId", 
        passport.authenticate('jwt', { session: false }),
        async (req,res) => {
            try {
                let result = await db.customer.findAll({
                    where: { customer_id: req.user.id },
                    attributes: ["id","status", "choosePet","amount","chooseService","toTime","fromTime","price","detail"],
                    include : [
                        {
                            model: db.matchjob,
                            as: "customers",
                            attributes: ["id", "date", "rate"],
                            include : [
                                {
                                    model: db.user,
                                    as: "providerId",    
                                    attributes: ["id","firstname", "lastname", "phone","address","district","province","user_image","balance"]
                                }
                            ]
                        }
                    ]
                })
                res.status(200).send(chenageStringToDate(result.map(item => item.dataValues)))
        
                
            } catch (error) {
                res.status(400).send({ message: error.message })
            }        
        }
    )

    app.delete("/deleteHireMatchJob/:id", 
        passport.authenticate('jwt', { session: false }),
        async (req,res) => {
            try {
                let result = await db.customer.findOne({
                    where: { id: req.params.id }
                })
                if (!result) {
                    res.status(404).send({ message: "404 Hire Job not found" })
                } else {
                    result.destroy()
                    res.status(200).send({ message: "delete success" })
                }
            } catch (error) {
                res.status(400).send({ message: error.message })
            }
        }
    )

    app.put("/updateStatusFinishToComplete/:id", 
        passport.authenticate('jwt', { session: false }),
        async (req, res) => {
            try {
                let result = await db.customer.findOne({
                    where: { id: req.params.id }
                })
                if (!result) {
                    res.status(404).send({ message: "404 Hire Job not found" })
                } else {
                    await result.update({ status: 'complete' })
                    res.status(200).send({ message: "update success" })
                }
            } catch (error) {
                res.status(400).send({ message: error.message })
            }
        }
    );

    app.put("/updatestatustoend", 
        passport.authenticate('jwt', { session: false }),
        async (req, res) => {
            try {
                let resultTarget = await db.customer.update(
                    {status: 'end'}, 
                    {where: {  
                        id: req.body.id,
                    }
                })
                if (!resultTarget) {
                    res.status(404).send('Not Found Customer')
                } else {
                    res.status(200).send({ message: 'update success' })
                }     
            } catch (error) {
                res.status(400).send({ message: error.message })
            }
            
        }
    );

    

}