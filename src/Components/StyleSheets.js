import React from "react";
import "./myStyles.css";

function StyleSheets(props) {
	const className = props.primary ? "primary" : "";
	return <h1 className={`${className} font-xl`}>StyleSheets</h1>;
}

export default StyleSheets;
