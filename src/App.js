import "./App.css";
import Counter from "./Components/Counter";
import Greet from "./Components/Greet";
import Hello from "./Components/Hello";
import Message from "./Components/Message";
import Welcome from "./Components/Welcome";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import EventBind from "./Components/EventBind";
import ParentComponent from "./Components/ParentComponent";
import UserGreeting from "./Components/UserGreeting";

function App() {
	return (
		<div className="App">
			{/* <Greet name="Hinduja" nickName="Hindu"></Greet> */}
      {/* <Welcome name="Hinduja" nickName="Hindu"></Welcome> */}
      {/* <Hello/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      <UserGreeting/>
		</div>
	);
}

export default App;
