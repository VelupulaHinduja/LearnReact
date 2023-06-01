import React from "react";
import Person from "./Person";

function NameList() {
	const persons = [
		{ id: 1, name: "Hinduja", age: 2, skill: "React" },
		{ id: 2, name: "Saketh", age: 1, skill: "Vue" },
		{ id: 3, name: "Shashi", age: 0, skill: "Angular" },
	];
	const personList = persons.map((person) => (
		<Person person={person}/>
	));
	return <div>{personList}</div>;
}

export default NameList;
