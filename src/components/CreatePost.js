import { useState } from "react";
import { Avatar } from "@mui/material";
import "../styles/CreatePost.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from "../StateProvider";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function CreatePost() {
	const [input, setInput] = useState("");
	const [imageURL, setImageURL] = useState("");
	const [{ user }, dispatch] = useStateValue();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input !== "" || imageURL !== "") {
			addPost();
		}
		setInput("");
		setImageURL("");
	};

	async function addPost() {
		try {
			await addDoc(collection(db, "posts"), {
				username: user.displayName,
				profilePic: user.photoURL,
				message: input,
				image: imageURL,
				likes: [],
				comments: [],
				timestamp: Date.now(),
			});
		} catch (error) {
			console.error("Error writing new post to Firebase Database", error);
		}
	}

	return (
		<div className="createPost">
			<div className="createPost__top">
				<Avatar src={user.photoURL} />
				<form action="">
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="createPost__input"
						placeholder={`What's on your mind? ${user.displayName}`}
					/>
					<input
						value={imageURL}
						onChange={(e) => setImageURL(e.target.value)}
						placeholder="image URL (optional)"
					/>
					<button type="submit" onClick={handleSubmit}>
						Hidden
					</button>
				</form>
			</div>
			<div className="createPost__bottom">
				<div className="createPost__option">
					<VideocamIcon style={{ color: "red" }} fontSize="large" />
					<h3>Live Video</h3>
				</div>
				<div className="createPost__option">
					<PhotoLibraryIcon style={{ color: "green" }} fontSize="large" />
					<h3>Photo/Video</h3>
				</div>
				<div className="createPost__option">
					<InsertEmoticonIcon style={{ color: "orange" }} fontSize="large" />
					<h3>Feeling/Activity</h3>
				</div>
			</div>
		</div>
	);
}

export default CreatePost;
