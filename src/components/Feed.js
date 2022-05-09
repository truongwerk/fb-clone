import "../styles/Feed.css";
import StoryReel from "./StoryReel";
import CreatePost from "./CreatePost";
import Post from "./Post";
import db from "../firebase";
import { useEffect, useState } from "react";
import {
	getFirestore,
	collection,
	addDoc,
	query,
	orderBy,
	limit,
	onSnapshot,
	setDoc,
	updateDoc,
	doc,
	serverTimestamp,
} from "firebase/firestore";

function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const recentMessagesQuery = query(
			collection(db, "posts"),
			orderBy("timestamp", "desc"),
			limit(12)
		);
		onSnapshot(recentMessagesQuery, (snapshot) => {
			setPosts(
				snapshot.docs.map((post) => ({
					id: post.id,
					data: post.data(),
				}))
			);
		});
	}, []);

	return (
		<div className="feed">
			<StoryReel />
			<CreatePost />
			<Post
				profilePic="https://waste4change.com/blog/wp-content/uploads/niko-photos-tGTVxeOr_Rs-unsplash-1024x683.jpg"
				username="Quang Truong"
				message="I love nature"
				timestamp="1652063422"
				image="https://ielts-thanhloan.com/wp-content/uploads/2021/01/trees.jpg"
			/>
			{posts.map((post) => (
				<Post
					key={post.id}
					profilePic={post.data.profilePic}
					username={post.data.username}
					message={post.data.message}
					timestamp={post.data.timestamp.seconds}
					image={post.data.image}
				/>
			))}
		</div>
	);
}

export default Feed;
