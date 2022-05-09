import "./styles/App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

function App() {
	const [{ user }, dispatch] = useStateValue();
	
	return (
		<div className="app">
			{!user ? (
				<Login />
			) : (
				<>
					<Header />
					<div className="app__body">
						<Sidebar />
						<Feed />
						<Widget />
					</div>
				</>
			)}
		</div>
	);
}

export default App;
