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
import NameList from "./Components/NameList";
import StyleSheets from "./Components/StyleSheets";
import Inline from "./Components/Inline";
import "./styleSheets.css"
import StylesModules from "./styleSheets.module.css"

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
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <StyleSheets primary={true}/> */}
      <Inline/>
      <h1 className="error">Error</h1>
      <h1 className={StylesModules.success}>Success</h1>
		</div>
	);
}

export default App;
