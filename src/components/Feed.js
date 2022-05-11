import "../styles/Feed.css";
import StoryReel from "./StoryReel";
import CreatePost from "./CreatePost";
import Post from "./Post";
import db from "../firebase";
import { useEffect, useState } from "react";
import {
	collection,
	query,
	orderBy,
	limit,
	onSnapshot,
} from "firebase/firestore";
import { Button } from "@mui/material";

function Feed() {
	const [posts, setPosts] = useState([]);
	const [postLimit, setPostLimit] = useState(1);

	useEffect(() => {
		const recentMessagesQuery = query(
			collection(db, "posts"),
			orderBy("timestamp", "desc"),
			limit(postLimit)
		);
		onSnapshot(recentMessagesQuery, (snapshot) => {
			setPosts(
				snapshot.docs.map((post) => ({
					...post.data(),
					id: post.id,
				}))
			);
		});
	}, [postLimit]);

	return (
		<div className="feed">
			<StoryReel />
			<CreatePost />
			{posts.map((post) => (
				<Post
					key={post.id}
					postID={post.id}
					profilePic={post.profilePic}
					username={post.username}
					message={post.message}
					timestamp={post.timestamp}
					image={post.image}
					likes={post.likes}
					comments={post.comments}
				/>
			))}
			<Button
				variant="outlined"
				fullWidth
				style={{ marginTop: "20px" }}
				onClick={() => {
					setPostLimit((pre) => pre + 1);
				}}
			>
				LOAD MORE POSTS
			</Button>
		</div>
	);
}

export default Feed;
