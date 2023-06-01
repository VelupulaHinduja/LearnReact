import "./App.css";
import Greet from "./Components/Greet";
import Hello from "./Components/Hello";
import Welcome from "./Components/Welcome";

function App() {
	return (
		<div className="App">
			<Greet name="Hinduja" nickName="Hindu">This is a children prop</Greet>
      <Welcome name="Hinduja" nickName="Hindu">Children prop from class component</Welcome>
      {/* <Hello/> */}
		</div>
	);
}

export default App;
