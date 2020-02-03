const jwt = require("jsonwebtoken")
const passport = require("passport")
const config = require("../config/passport/passport")

module.exports = (app, db) => {

	app.post("/isTokenExpired",
		passport.authenticate("jwt", {
			session: false
		}),
		(req, res) => {
			res.status(200).json({ message: "Online" });
		});

	app.get("/alluser", async (req, res) => {
		try {
			let result = await db.user.findAll({
				where: { role: 'USER' },
			});
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send({ message: error.message });
		}
	});

	app.post('/register', (req, res, next) => {
		passport.authenticate('register', (err, user, info) => {
			if (info !== undefined) {
				console.error(info.message);
				res.status(403).send(info.message)
			} else {
				user.update({
					id: req.body.id,
					firstname: req.body.firstname,
					lastname: req.body.lastname,
					phone: '0' + req.body.phone,
					address: req.body.address,
					district: req.body.district,
					province: req.body.province,
					balance: req.body.balance,
					user_image: req.body.user_image,
					star: req.body.star,
					count: req.body.count

				})
					.then(result => {
						console.log('user created in db')
						res.status(200).send({ message: 'user created' })
					})
					.catch(err => {
						console.erroe(err)
						res.status(400).send({ message: err.message })
					})
			}
		})(req, res, next)
	})

	app.post("/login", (req, res, next) => {
		passport.authenticate("login", (err, user, info) => {
			if (err) {
				console.error(err);
			}
			if (info !== undefined) {
				console.error(info.message);
				if (info.message === "username or password is incorrect.") {
					res.status(401).send({ message: info.message });
				} else {
					res.status(400).send(info.message);
				}
			} else {
				const token = jwt.sign(
					{
						id: user.id,
						role: user.role,
						name: user.email,
						firstname: user.firstname,
						lastname: user.lastname
					},
					config.jwtOptions.secretOrKey,
					{ expiresIn: 3600 }
				);
				res.status(200).send({
					auth: true,
					token,
					message: "user found & logged in"
				});
			}
		})(req, res, next);
	});

	app.put('/edit-info', passport.authenticate('jwt', { session: false }),
		(req, res) => {
			db.user.update(
				{
					firstname: req.body.firstname,
					lastname: req.body.lastname,
					phone: req.body.phone,
					email: req.body.email,
					address: req.body.address,
					district: req.body.district,
					province: req.body.province,
					balance: req.body.balance,
					user_image: req.body.user_image,
				},
				{ where: { id: req.user.id } }
			)
				.then(result => {
					console.log('user update in db')
					res.status(200).send({ message: 'user updated success' })
				})
				.catch(err => {
					console.erroe(err)
					res.status(400).send({ message: err.message })
				})

		})


	app.get('/getinfo', passport.authenticate('jwt', { session: false }),
		(req, res) => {
			db.user.findOne({ where: { id: req.user.id } })
				.then(result => {
					console.log(result)
					res.status(200).send(result)
				}).catch(err => {
					res.status(400).send({ message: err })
				})
		}
	)

	app.put('/createPost', passport.authenticate('jwt', { session: false }), (req, res) => {
		// console.log(req.user.id,"aaaaa")
		if (!req.files) {
			res.send({
				status: false,
				message: "No file uploaded"
			});
		} else {
			let picture = req.files.postImage

			let pictureName = (new Date()).getTime() + ".jpeg"
			picture.mv("./uploads/" + pictureName)
			db.user.update({
				user_image: pictureName
			},
				// user_image: `http://localhost:8080/${pictureName}.jpeg`},
				{ where: { id: req.user.id } }
			)
				.then(result => {
					res.status(201).send({
						status: true,
						message: "File is uploaded",
						data: {
							name: pictureName,
							mimetype: picture.mimetype,
							size: picture.size
						}
					})
				})
				.catch(err => {
					console.error(err)
					res.status(400).send({ message: err.message })
				})
		}
	})

	app.put('/updateBalanceWhenAccept',
		passport.authenticate('jwt', { session: false }),
		async (req, res) => {
			try {
				let resultProvider = await db.user.findOne({ where: { id: req.user.id } })
				let resultCustomer = await db.user.findOne({ where: { id: req.body.customer_id } })

				if (!resultProvider
					||
					!resultCustomer
				) {
					res.status(404).send({ message: 'User not found' })
				} else {
					resultProvider.update({ balance: req.body.balanceProvider })
					resultCustomer.update({ balance: req.body.balanceCustomer })
					res.status(200).send({ message: 'Update success' })
				}
			} catch (error) {
				console.log('yyy')
				res.status(400).send({ message: error.message })
			}
		}
	)

	app.put('/updateBalanceWhenComplete',
		passport.authenticate('jwt', { session: false }),
		async (req, res) => {
			try {
				let resultCustomer = await db.user.findOne({ where: { id: req.user.id } })
				let resultProvider = await db.user.findOne({ where: { id: req.body.provider_id } })

				if (!resultProvider
					||
					!resultCustomer
				) {
					res.status(404).send({ message: 'User not found' })
				} else {
					resultProvider.update({ balance: req.body.balanceProvider })
					resultCustomer.update({ balance: req.body.balanceCustomer })
					res.status(200).send({ message: 'Update success' })
				}
			} catch (error) {
				console.log('yyy')
				res.status(400).send({ message: error.message })
			}
		}
	)

}