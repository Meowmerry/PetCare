const express = require('express')
const bodyParser = require('body-parser')
const db = require("./models")
const cors = require('cors')
const userService = require('./service/userService')
const adminService = require('./service/adminService')
const animalService = require('./service/animalService')
const takecareofService = require('./service/takecareofService')
const serviceServer = require('./service/serviceServer')
const serviceofServer = require('./service/serviceofServer')
const matchjobService = require('./service/matchjobService')
const customerService = require('./service/customerService')
const passport = require('passport')
const fileUpload = require('express-fileupload');
const app = express()

app.use(express.static("uploads"))
app.use(
    fileUpload({
        createParentPath:true
    })
)

app.use(passport.initialize())
require("./config/passport/passport")


app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

db.sequelize.sync({ force: false }).then(() => {
    userService(app, db);
    adminService(app, db);
    animalService(app, db)
    takecareofService(app, db)
    serviceServer(app, db)
    serviceofServer(app, db)
    matchjobService(app, db)
    customerService(app, db)

    app.listen(8080, () => { console.log("server is running on port  8080") })
})