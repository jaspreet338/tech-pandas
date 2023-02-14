import React, { useState } from "react";

const RegisterForm = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		passwordConfirm: "",
	});

	const handleInputChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);
		// Your code to submit form data to the server
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="username">Username:</label>
				<input
					type="text"
					id="username"
					name="username"
					value={formData.username}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					id="password"
					name="password"
					value={formData.password}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<label htmlFor="passwordConfirm">Confirm Password:</label>
				<input
					type="password"
					id="passwordConfirm"
					name="passwordConfirm"
					value={formData.passwordConfirm}
					onChange={handleInputChange}
				/>
			</div>
			<button type="submit">Register</button>
		</form>
	);
};

export default RegisterForm;