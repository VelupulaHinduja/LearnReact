import React, { Component } from "react";

class UserGreeting extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: true,
		};
	}
	render() {
        let message
		if (this.state.isLoggedIn) {
			message= "Welcome Hindu"
		} else message="Welcome guest";
        return <div>{message}</div>
	}
}

export default UserGreeting;
