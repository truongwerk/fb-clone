import { Avatar } from "@mui/material";
import "../styles/Post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NearMeIcon from "@mui/icons-material/NearMe";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Post({ profilePic, username, message, timestamp, image }) {
	return (
		<div className="post">
			<div className="post__top">
				<Avatar src={profilePic} className="post__avatar" />
				<div className="post__topInfo">
					<h3>{username}</h3>
					<p>{new Date(timestamp * 1000).toLocaleString("en-GB")}</p>
				</div>
			</div>
			<div className="post__bottom">
				<p>{message}</p>
			</div>
			<div className="post__image">
				<img src={image} alt="" />
			</div>
			<div className="post__options">
				<div className="post__option">
					<ThumbUpIcon />
					<p>Like</p>
				</div>
				<div className="post__option">
					<ChatBubbleOutlineOutlinedIcon />
					<p>Comment</p>
				</div>
				<div className="post__option">
					<NearMeIcon />
					<p>Share</p>
				</div>
				<div className="post__option">
					<AccountCircleIcon />
					<ExpandMoreIcon />
				</div>
			</div>
		</div>
	);
}

export default Post;
