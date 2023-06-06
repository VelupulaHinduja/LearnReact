import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Hinduja",
		};
	}
	componentDidMount() {
		setInterval(() => {
			this.setState({ name: "Hinduja" });
		}, 1000);
	}

	render() {
		console.log("==========Parent component=============");
		return (
			<>
				{/* <RegComp  name={this.state.name}/> */}
				{/* <PureComp name={this.state.name}/> */}
				<div>ParentComp</div>
				<MemoComp name={this.state.name}/>
			</>
		);
	}
}

export default ParentComp;
