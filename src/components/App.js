import React, { useState, useEffect } from 'react';
import AppRouter from 'routes/Router';
import { authService } from 'fbase';

function App() {
	const [init, setInit] = useState(false);
	const [userInfo, setUserInfo] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser == null ? false : true);

	useEffect(() => {
		authService.onAuthStateChanged((user) => {
			if (user) {
				setIsLoggedIn(true);
				setUserInfo({
					displayName: user.displayName,
					uid: user.uid,
					updateProfile: (args) => user.updateProfile(args)
				});
			} else {
				setIsLoggedIn(false);
			}
			setInit(true);
		});
	}, []);
	const refreshUser = () => {
		const user = authService.currentUser;
		setUserInfo({
			displayName: user.displayName,
			uid: user.uid,
			updateProfile: (args) => user.updateProfile(args)
		});
	};
	return (
		<>
			{init ? (
				<AppRouter refreshUser={refreshUser} userInfo={userInfo} isLoggedIn={isLoggedIn} />
			) : (
				'Initializing...'
			)}
		</>
	);
}

export default App;
