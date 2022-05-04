import { Avatar } from "@mui/material";
import "./CreatePost.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

function CreatePost() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="createPost">
			<div className="createPost__top">
				<Avatar />
				<form action="">
					<input
						className="createPost__input"
						placeholder={`What's on your mind?`}
					/>
					<input placeholder="image URL (optional)" />
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
