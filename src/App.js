import "./styles/App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";
import Login from "./components/Login";

import useUser from "./GlobalState";

function App() {
	const user = useUser((state) => state.user);
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
