import React, { Component } from "react";

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			comment: "",
			topic: "React",
		};
	}
	handleUsername = (event) => {
		this.setState({ username: event.target.value });
	};
	handleComment = (event) => {
		this.setState({ comment: event.target.value });
	};
	handleTopic = (event) => {
		this.setState({ topic: event.target.value });
	};
    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault();
    };

	render() {
        const {username, comment, topic} =this.state
		return (
			<form onSubmit={this.handleSubmit}>
                <br/>
				<div>
					<label>Username</label>
					<input type="text" value={username} onChange={this.handleUsername} />
				</div>
                <br/>
				<div>
					<label>Comment</label>
					<textarea value={comment} onChange={this.handleComment} />
				</div>
                <br/>
				<div>
					<label>Topic</label>
					<select value={topic} onChange={this.handleTopic}>
						<option value="React">React</option>
						<option value="Vue">Vue</option>
						<option value="Angular">Angular</option>
					</select>
				</div>
                <br/>
                <button type="submit">Submit</button>
			</form>
		);
	}
}

export default Form;
