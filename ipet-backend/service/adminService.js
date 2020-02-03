const passport = require("passport");

module.exports = (app, db) => {
	app.post("/registeradmin", (req, res, next) => {
		passport.authenticate("register", (err, user, info) => {
			if (info !== undefined) {
				console.error("error of info.message is", info.message);
				res.status(403).send(info.message)
			} else {
				user
					.update({
						firstname: req.body.firstname,
						lastname: req.body.lastname,
						role: "ADMIN"
					})
					.then(result => {
						console.log("user created in db");
						res.status(200).send({
							message: "admin created"
						});
					})
					.catch(err => {
						console.erroe(err);
						res.status(400).send({
							message: err.message
						});
					});
			}
		})(req, res, next);
	});

	app.delete(
		"/deleteadmin",
		passport.authenticate("jwt", {
			session: false
		}),
		async function (req, res) {
			console.log(req.body)
			db.user
				.destroy({
					where: {
						id: req.body.id
					}
				})
				.then(result => {
					console.log(result);
					res.status(200).send("delete sucess");
				})
				.catch(err => {
					res.status(400).send({
						message: err
					});
				});
		}
	);

	app.put(
		"/edituser",
		passport.authenticate("jwt", {
			session: false
		}),
		async function (req, res) {
			db.user
				.update({
					firstname: req.body.firstname,
					lastname: req.body.lastname,
					phone: req.body.phone,
					email: req.body.email,
					address: req.body.address,
					district: req.body.district,
					province: req.body.province
				}, {
					where: {
						id: req.body.id
					}
				})
				.then(result => {
					console.log(result);
					res.status(200).send("edit sucess");
				})
				.catch(err => {
					res.status(400).send({
						message: err
					});
				});
		}
	);;

	app.delete('/deleteadmin', passport.authenticate('jwt', {
			session: false
		}),
		async function (req, res) {
			db.user.destroy({
					where: {
						id: req.body.id
					}
				})
				.then(result => {
					console.log(result)
					res.status(200).send(result)
				}).catch(err => {
					res.status(400).send({
						message: err
					})
				})

		}
	)

	app.get('/getalluser', passport.authenticate('jwt', {
			session: false
		}),
		async function (req, res) {
			db.user.findAll()
				.then(result => {
					console.log(result)
					res.status(200).send(result)
				}).catch(err => {
					res.status(400).send({
						message: err
					})
				})

		}
	)

	app.get('/getallanimal', passport.authenticate('jwt', {
			session: false
		}),
		async function (req, res) {
			db.animal.findAll()
				.then(result => {
					console.log(result)
					res.status(200).send(result)
				}).catch(err => {
					res.status(400).send({
						message: err
					})
				})

		}
	)
	app.post('/addanimal', passport.authenticate('jwt', {
			session: false
		}),
		async function (req, res) {
			if (req.body.animal == "" || req.body.animal == undefined || req.body.animal == null) {
				console.log("failed add")
				res.status(400).send({
					message: "bad request"
				})
			} else {
				db.animal.create({
						animal: req.body.animal,
						imganimal_url: req.body.imganimal_url
					})
					.then(result => {
						console.log(result)
						res.status(200).send({
							result,
							message: "Add animal success"
						})
					}).catch(err => {
						res.status(400).send({
							message: err
						})
					})
			}
		}
	)

	app.put('/updateanimal', passport.authenticate('jwt', {
			session: false
		}),
		async function (req, res) {
			db.animal.update({
					animal: req.body.animal,
					imganimal_url: req.body.imganimal_url
				}, {
					where: {
						id: req.body.id
					}
				})
				.then(result => {
					console.log(result)
					res.status(200).send({
						result,
						message: "edited success"
					})
				}).catch(err => {
					res.status(400).send({
						message: "cannot delete",
						err
					})
				})
		}
	)

	app.delete('/deleteanimal', passport.authenticate('jwt', {
			session: false
		}),
		async function (req, res) {
			db.animal.destroy({
					where: {
						id: req.body.id
					}
				})
				.then(result => {
					console.log(result)
					res.status(200).send({
						result,
						message: "deleted success"
					})
				}).catch(err => {
					res.status(400).send({
						message: "cannot delete",
						err
					})
				})

		}
	)

	app.get('/getallservice', passport.authenticate('jwt', {
			session: false
		}),
		async function (req, res) {
			db.service.findAll()
				.then(result => {
					console.log(result.data)
					res.status(200).send(result)
				}).catch(err => {
					res.status(400).send({
						message: err
					})
				})

		}
	)
	app.post('/addservice', passport.authenticate('jwt', {
			session: false
		}),
		async function (req, res) {
			if (req.body.service == "" || req.body.service == undefined || req.body.service == null) {
				console.log("failed add")
				res.status(400).send({
					message: "bad request"
				})
			} else {
				db.service.create({
						service: req.body.service,
						imgservice_url: req.body.imgservice
					})
					.then(result => {
						console.log(result)
						res.status(200).send({
							result,
							message: "Add service success"
						})
					}).catch(err => {
						res.status(400).send({
							message: err
						})
					})
			}
		}
	)

	app.delete('/deleteservice', passport.authenticate('jwt', {
			session: false
		}),
		async function (req, res) {
			db.service.destroy({
					where: {
						id: req.body.id
					}
				})
				.then(result => {
					console.log(result)
					res.status(201).send({
						result,
						message: "deleted success"
					})
				}).catch(err => {
					res.status(400).send({
						message: "cannot delete",
						err
					})
				})

		}
	)

	app.put('/updateservice', passport.authenticate('jwt', {
			session: false
		}),
		async function (req, res) {
			db.service.update({
					service: req.body.service,
					imgservice_url: req.body.imgservice_url
				}, {
					where: {
						id: req.body.id
					}
				})
				.then(result => {
					console.log(result)
					res.status(200).send({
						result,
						message: "edit success"
					})
				}).catch(err => {
					res.status(400).send({
						message: "cannot delete",
						err
					})
				})
		}
	)

	app.post('/createtransaction', passport.authenticate('jwt', {
			session: false
		}),
		async function (req, res) {
			db.transaction
				.create({
					customer_Name: req.body.customerName,
					provider_Name: req.body.providerName,
					card_Id: req.body.cardId,
					status: "Accept"
					
				})
				.then(result => {
					console.log(result)
					res.status(201).send({
						result,
						message: "save transaction success"
					})
				})
				.catch(err => {
					res.status(400).send({
						message: "save transaction unsuccess",
						err
					})
				})
		}
	)

	app.get('/gettransaction', passport.authenticate('jwt', {
			session: false
		}),
		async function (req, res) {
			db.transaction.findAll()
				.then(result => {
					console.log(result)
					res.status(200).send(result)
				}).catch(err => {
					res.status(400).send({
						message: err
					})
				})

		}
	)

	app.put('/updatetransaction', passport.authenticate('jwt', {
			session: false
		}),
		async function (req, res) {
			db.transaction.update({
				status: "Complete"
				}, {
					where: {
						customer_Name: req.body.customerName,
						provider_Name: req.body.providerName,
						card_Id: req.body.cardId,
						status: "Accept",
					}
				})
				.then(result => {
					console.log(result)
					res.status(200).send(result)
				}).catch(err => {
					res.status(400).send({
						message: err
					})
				})
		}
	)

}