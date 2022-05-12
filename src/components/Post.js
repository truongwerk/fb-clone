import { Avatar, IconButton } from "@mui/material";
import "../styles/Post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NearMeIcon from "@mui/icons-material/NearMe";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SendIcon from "@mui/icons-material/Send";
import { updateDoc, doc, arrayUnion, arrayRemove } from "firebase/firestore";
import db from "../firebase";
import { useEffect, useState } from "react";
import useUser from "../GlobalState";

function Post({
	profilePic,
	username,
	message,
	timestamp,
	image,
	postID,
	likes,
	comments,
}) {
	const user = useUser((state) => state.user);
	const [isLiked, setIsLiked] = useState("");
	const [comment, setComment] = useState("");
	const postRef = doc(db, "posts", postID);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (comment !== "") {
			addComment();
			setComment("");
		}
	};

	const addComment = async () => {
		await updateDoc(postRef, {
			comments: arrayUnion({
				username: user.displayName,
				profilePic: user.photoURL,
				comment: comment,
				uid: `${user.uid}+${Date.now()}+${Math.random()}`,
			}),
		});
	};

	useEffect(() => {
		setIsLiked("");
		for (let i = 0; i < likes.length; i++) {
			if (likes[i] === user.uid) {
				setIsLiked("primary");
			}
		}
	}, [likes, user]);

	const likePost = async () => {
		if (isLiked === "") {
			await updateDoc(postRef, { likes: arrayUnion(user.uid) });
		} else {
			await updateDoc(postRef, { likes: arrayRemove(user.uid) });
		}
	};

	return (
		<div className="post">
			<div className="post__top">
				<Avatar src={profilePic} className="post__avatar" />
				<div className="post__topInfo">
					<h3>{username}</h3>
					<p>{new Date(timestamp).toLocaleString("en-NZ")}</p>
				</div>
			</div>
			<div className="post__bottom">
				<p>{message}</p>
			</div>
			<div className="post__image">
				<img src={image} alt="" />
			</div>
			<div className="post__options">
				<div className="post__option" onClick={likePost}>
					<ThumbUpIcon color={isLiked} />
					<p>{!likes.length ? "Like" : likes.length}</p>
				</div>
				<div className="post__option">
					<ChatBubbleOutlineOutlinedIcon />
					<p>{!comments.length ? "Comment" : comments.length}</p>
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
			{comments.length ? (
				<div className="post__comments">
					{comments.map((item) => (
						<PostComment
							key={item.uid}
							profilePic={item.profilePic}
							username={item.username}
							comment={item.comment}
						/>
					))}
				</div>
			) : null}

			<div className="post__addComment">
				<Avatar src={user.photoURL} className="post__avatar" />
				<form action="">
					<input
						type="text"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
						placeholder="Add Comment"
					/>
					<IconButton type="submit" onClick={handleSubmit}>
						<SendIcon size="large" style={{ color: "blue" }} />
					</IconButton>
				</form>
			</div>
		</div>
	);
}

function PostComment({ profilePic, username, comment }) {
	return (
		<div className="post__comment">
			<Avatar src={profilePic} />
			<div className="post__comment__content">
				<h4>{username}</h4>
				<p>{comment}</p>
			</div>
		</div>
	);
}

export default Post;
