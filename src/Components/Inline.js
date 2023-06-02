import React from "react";

const heading = {
	color: "red",
	fontSize: "50px",
};

function Inline() {
	return (
		<div>
			<h1 style={heading}>Inline</h1>
            <h1 className="error">Error</h1>
            <h1 className={StylesModules.success}>Success</h1>
		</div>
	);
}

export default Inline;
