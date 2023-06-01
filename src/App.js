import "./App.css";
import Counter from "./Components/Counter";
import Greet from "./Components/Greet";
import Hello from "./Components/Hello";
import Message from "./Components/Message";
import Welcome from "./Components/Welcome";

function App() {
	return (
		<div className="App">
			{/* <Greet name="Hinduja" nickName="Hindu">This is a children prop</Greet> */}
      {/* <Welcome name="Hinduja" nickName="Hindu">Children prop from class component</Welcome> */}
      {/* <Hello/> */}
      {/* <Message/> */}
      <Counter/>
		</div>
	);
}

export default App;
