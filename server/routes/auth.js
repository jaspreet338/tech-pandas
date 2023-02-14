const pool = require("../db");
const express = require("express");
const router = require("../api");
const bcrypt = require("bcrypt");

const comparePasswords = async (enteredPassword, hashedPassword) => {
	return bcrypt.compare(enteredPassword, hashedPassword);
};

router.post("/login", async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	try {
		const result = await pool.query(
			`SELECT * FROM users WHERE email = '${email}'`
		);
		if (result.rows.length === 0) {
			return res.status(401).json({ error: "Incorrect email" });
		}

		const hashedPassword = result.rows[0].password;

		const isPasswordMatch = await comparePasswords(password, hashedPassword);

		if (!isPasswordMatch) {
			return res.status(400).send({ message: "Incorrect password." });
		}

		return res.send({ message: "Login successful." });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: "An error occurred" });
	}
});


