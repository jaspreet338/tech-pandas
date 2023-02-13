
import React, { useState } from "react";
 export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  
  return (
		<form>
			<label htmlFor="email">email</label>
			<input
        value={email}
				type="email"
				placeholder="youremail@gmail.com"
				id="email"
				name="email"
			/>
			<label htmlFor="password">password</label>
			<input
      value={pass}
				type="password"
				placeholder="********"
				id="password"
				name="password"
			/>
      <button>Log In</button>
		</form>
	);
};



