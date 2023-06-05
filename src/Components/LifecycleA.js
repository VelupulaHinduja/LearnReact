import React, { Component } from "react";

class LifecycleA extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Hinduja",
		};
		console.log("LifecycleA constructor");
	}
	static getDerivedStateFromProps(props, state) {
		console.log("LifecycleA getDerivedStateFromProps");
		return null;
	}

	componentDidMount() {
		console.log("LifecycleA componentDidMount");
	}
	render() {
		console.log("LifecycleA render");
		return (
			<div>
				<div>LifecycleA</div>
			</div>
		);
	}
}

export default LifecycleA;
