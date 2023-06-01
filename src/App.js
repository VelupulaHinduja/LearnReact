import "./App.css";
import Counter from "./Components/Counter";
import Greet from "./Components/Greet";
import Hello from "./Components/Hello";
import Message from "./Components/Message";
import Welcome from "./Components/Welcome";

function App() {
	return (
		<div className="App">
			<Greet name="Hinduja" nickName="Hindu"></Greet>
      <Welcome name="Hinduja" nickName="Hindu"></Welcome>
      {/* <Hello/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
		</div>
	);
}

export default App;
