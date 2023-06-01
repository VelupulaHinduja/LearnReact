import React, { Component } from "react";

class Counter extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}
	increment() {
		this.setState(prevState => ({ count: prevState.count + 1 }))
        console.log(this.state.count)
	}
	incrementFive() {
		this.increment();
		this.increment();
		this.increment();
		this.increment();
		this.increment();
	}
	render() {
		return (
			<div>
				<h3>Count {this.state.count}</h3>
				<button onClick={() => this.incrementFive()}>Increment</button>
			</div>
		);
	}
}

export default Counter;
