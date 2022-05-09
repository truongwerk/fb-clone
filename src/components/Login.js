import { Button } from "@mui/material";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import "../styles/Login.css";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
	const [state, dispatch] = useStateValue();

	const signIn = async () => {
		try {
			let result = await signInWithPopup(auth, provider);
			dispatch({ type: actionTypes.SET_USER, user: result.user });
		} catch (error) {
			console.log(error);
		}
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
				Login with google
			</Button>
		</div>
	);
}

export default Login;
