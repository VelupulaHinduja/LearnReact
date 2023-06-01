import React, { Component } from "react";

class Welcome extends Component {
	render() {
		const {name, nickName} = this.props
		return (
			<div>
				<h1>
					Welcome {name} a.k.a {nickName}
				</h1>
			</div>
		);
	}
}

export default Welcome;
