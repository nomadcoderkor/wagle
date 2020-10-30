import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({ refreshUser, isLoggedIn, userInfo }) => {
	return (
		<Router>
			{isLoggedIn && <Navigation userInfo={userInfo} />}
			<Switch>
				{isLoggedIn ? (
					<div
						style={{
							maxWidth: 890,
							width: "100%",
							margin: "0 auto",
							marginTop: 80,
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Route exact path="/">
							<Home userInfo={userInfo} />
						</Route>
						<Route exact path="/profile">
							<Profile userInfo={userInfo} refreshUser={refreshUser} />
						</Route>
					</div>
				) : (
						<>
							<Route exact path="/">
								<Auth />
							</Route>
						</>
					)}
			</Switch>
		</Router>
	);
};
export default AppRouter;