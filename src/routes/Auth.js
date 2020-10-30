import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGoogle,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { authService, firebaseInstance } from 'fbase';
import AUthForm from 'components/AuthForm';

const Auth = () => {
	const onSocialClick = async (event) => {
		const {
			target: { name }
		} = event;
		console.log(name);
		let provider;
		if (name === 'google') {
			provider = new firebaseInstance.auth.GoogleAuthProvider();
			provider.addScope('profile');
			provider.addScope('email');
			await authService.signInWithPopup(provider);
		} else {
			alert('서비스 준비중입니다.');
		}
	};
	return (
		<div className="authContainer">
			<FontAwesomeIcon
				icon={faTwitter}
				color={"#04AAFF"}
				size="3x"
				style={{ marginBottom: 30 }}
			/>
			<AUthForm />
			<div className="authBtns"> 
				<button onClick={onSocialClick} name="google" className="authBtn">
					Continue with Google <FontAwesomeIcon icon={faGoogle} />
				</button>
				<button onClick={onSocialClick} name="gh" className="authBtn">
					Continue with Github <FontAwesomeIcon icon={faGithub} />
				</button>
			</div>
		</div>
	);
};

export default Auth;
