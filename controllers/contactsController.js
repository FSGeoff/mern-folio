const express = require("express");
const router = express.Router();
const Contact = require("../models/contacts");

router.get("/", (req, res) => {
	Contact.find()
		.then((contacts) => {
			res.json(contacts);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).end();
		});
});

router.post("/", (req, res) => {
	console.table(req.body);
	Contact.create(req.body).then((newContact) => {
		console.log(newContact);
		res.json(newContact);
	});
});

module.exports = router;
