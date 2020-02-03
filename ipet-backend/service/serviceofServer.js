const passport = require('passport');

module.exports = (app, db) => {

    app.get('/getUserServiceOf',
        passport.authenticate('jwt', { session: false }),
        async(req,res) => {
            try {
                let result = await db.serviceof.findAll({ where: {user_id: req.user.id} })
                console.log(result)
                res.status(200).send(result)    
            } catch (error) {
                res.status(400).send({ message: error.message })    
            }
        }
    )

    app.post('/createUserServiceOf', 
        passport.authenticate('jwt', { session: false }),
        async (req, res) => {
            try {
                await db.serviceof.destroy({ where: {user_id: req.user.id} })
                await req.body.serviceOf.map(service => 
                    db.serviceof.create({ 
                        user_id: req.user.id ,
                        service_id: service
                    })
                )
                res.status(201).send({ message: 'save success' })     
            } catch (error) {
                res.status(400).send({ message: error.message })    
            }
        }
    )

}