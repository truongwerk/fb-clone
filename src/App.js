import "./styles/App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className="app">
			<Header />
			<div className="app__body">
				<Sidebar/>
				<Feed/>
				{/* widget */}
			</div>
		</div>
	);
}

export default App;
