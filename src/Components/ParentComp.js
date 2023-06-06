import React, { PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends PureComponent {
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
        console.log("==========Parent component=============")
		return (
			<>
				<RegComp  name={this.state.name}/>
				<PureComp name={this.state.name}/>
				<div>ParentComp</div>
			</>
		);
	}
}

export default ParentComp;
