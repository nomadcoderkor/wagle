import React, { useState } from "react";
import { authService } from "fbase";
import { useHistory } from "react-router-dom";

export default ({ refreshUser, userInfo }) => {
	const history = useHistory();
	const [newDisplayName, setNewDisplayName] = useState(userInfo.displayName);
	const onLogOutClick = () => {
		authService.signOut();
		history.push("/");
	};
	const onChange = (event) => {
		const {
			target: { value },
		} = event;
		setNewDisplayName(value);
	};
	const onSubmit = async (event) => {
		event.preventDefault();
		if (userInfo.displayName !== newDisplayName) {
			await userInfo.updateProfile({
				displayName: newDisplayName,
			});
			refreshUser();
		}
	};
	return (
		<div className="container">
			<form onSubmit={onSubmit} className="profileForm">
				<input
					onChange={onChange}
					type="text"
					autoFocus
					placeholder="Display name"
					value={newDisplayName}
					className="formInput"
				/>
				<input
					type="submit"
					value="Update Profile"
					className="formBtn"
					style={{
						marginTop: 10,
					}}
				/>
			</form>
			<span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
				Log Out
      </span>
		</div>
	);
};