const passport = require('passport');

module.exports = (app, db) => {

    app.get('/getAnimals', 
        passport.authenticate('jwt', { session: false }),
        async (req,res)=>{
            try {
                let result = await db.animal.findAll()
                res.status(200).send(result)
            } catch (error) {
                res.status(400).send({ message: error.message })
            }
        }
    )

    app.get('/getAnimalsForGuest', 
    async (req,res)=>{
        try {
            let result = await db.animal.findAll()
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
)

}