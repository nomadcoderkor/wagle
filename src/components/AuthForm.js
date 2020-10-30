import React, { useState } from 'react';
import { authService } from 'fbase';

const inputStyle = {};

const AuthForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [newAccount, setNewAccount] = useState(false);
	const [error, setError] = useState('');
	const onChange = (event) => {
		const {
			target: { name, value }
		} = event;
		if (name === 'email') {
			setEmail(value);
		} else if (name === 'password') {
			setPassword(value);
		}
	};

	const onSbumit = async (event) => {
		event.preventDefault();
		try {
			if (newAccount) {
				//create account
				await authService.createUserWithEmailAndPassword(email, password);
			} else {
				// Log in
				await authService.signInWithEmailAndPassword(email, password);
			}
		} catch (error) {
			setError(error.message);
		}
	};

	const toggleAccount = () => {
		setNewAccount((prev) => !prev);
	};
	return (
		<>
			<form onSubmit={onSbumit} className="container">
				<input
					name="email"
					type="text"
					placeholder="Email"
					required
					value={email}
					onChange={onChange}
					className="authInput"
				/>
				<input
					name="password"
					type="password"
					required
					value={password}
					onChange={onChange}
					className="authInput"
				/>
				<input
					type="submit"
					value={newAccount ? 'Create Account' : 'Sign In'}
					className="authInput authSubmit"
				/>
				{error && <span className="authError">{error}</span>}
			</form>
			<span onClick={toggleAccount} className="authSwitch">
				{newAccount ? 'Sign In' : 'Create Account'}
			</span>
		</>
	);
};

export default AuthForm;
