import { Button } from "@mui/material";
import { auth, provider } from "../firebase";
import "../styles/Login.css";

function Login() {
	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => console.log(result))
			.catch((error) => alert(error.message));
	};
	return (
		<div className="login">
			<div className="login__logo">
				<img src="/img/fb_logo.png" alt="" />
				<img
					src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
					alt=""
				/>
			</div>
			<Button type="submit" variant="contained" onClick={signIn}>
				Login
			</Button>
		</div>
	);
}

export default Login;
