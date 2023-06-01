import React, { Component } from "react";

class UserGreeting extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: true,
		};
	}
	render() {
		// return this.state.isLoggedIn && <div>Welcome Hindu</div>
		return this.state.isLoggedIn ? <div>Welcome Hindu</div> : <div>Welcome guest</div>;
		// let message
		// if (this.state.isLoggedIn) {
		// 	message= "Welcome Hindu"
		// } else message="Welcome guest";
		// return <div>{message}</div>

		// if (this.state.isLoggedIn) {
		// 	return <div>"Welcome Hindu"</div>
		// } else return <div>"Welcome guest"</div>;
	}
}

export default UserGreeting;
