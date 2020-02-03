const passport = require('passport');

module.exports = (app, db) => {

    app.get('/getUserTakeCareOf',
        passport.authenticate('jwt', { session: false }),
        async(req,res) => {
            try {
                let result = await db.takecareof.findAll({ where: {user_id: req.user.id} })
                console.log(result)
                res.status(200).send(result)    
            } catch (error) {
                res.status(400).send({ message: error.message })    
            }
        }
    )

    app.post('/createUserTakeCareOf', 
        passport.authenticate('jwt', { session: false }),
        async (req, res) => {
            try {
                await db.takecareof.destroy({ where: {user_id: req.user.id} })
                await req.body.takeCareOf.map(takecare => 
                    db.takecareof.create({ 
                        user_id: req.user.id ,
                        animal_id: takecare
                    })
                )
                res.status(201).send({ message: 'save success' })     
            } catch (error) {
                res.status(400).send({ message: error.message })    
            }
        }
    )

}