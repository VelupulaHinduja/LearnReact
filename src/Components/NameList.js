import React from "react";

function NameList() {
	const persons = [
		{ id: 1, name: "Hinduja", age: 2, skill: "React" },
		{ id: 2, name: "Saketh", age: 1, skill: "Vue" },
		{ id: 3, name: "Shashi", age: 0, skill: "Angular" },
	];
	const personList = persons.map((person) => (
		<h2>
			I am {person.name}, I am {person.age} years old, I am skilled at {person.skill}
		</h2>
	));
	return <div>{personList}</div>;
}

export default NameList;
