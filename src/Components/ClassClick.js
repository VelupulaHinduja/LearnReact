import React, { Component } from "react";

class ClassClick extends Component {
	clickHandler() {
		console.log("Button clicked");
	}
	render() {
		return <button onClick={this.clickHandler}>Click</button>;
	}
}

export default ClassClick;
