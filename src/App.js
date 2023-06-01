import "./App.css";
import Greet from "./Components/Greet";
import Hello from "./Components/Hello";
import Welcome from "./Components/Welcome";

function App() {
	return (
		<div className="App">
			<Greet name="Hinduja" nickName="Hindu"/>
      {/* <Welcome/> */}
      {/* <Hello/> */}
		</div>
	);
}

export default App;
