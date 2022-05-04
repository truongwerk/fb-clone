import "../styles/Feed.css";
import StoryReel from "./StoryReel";
import CreatePost from "./CreatePost";
import Post from "./Post";
function Feed() {
	return (
		<div className="feed">
			<StoryReel />
			<CreatePost />
			<Post
				profilePic="https://waste4change.com/blog/wp-content/uploads/niko-photos-tGTVxeOr_Rs-unsplash-1024x683.jpg"
				username="Quang Truong"
				message="I love nature"
				timestamp="time stamp @@"
				image="https://ielts-thanhloan.com/wp-content/uploads/2021/01/trees.jpg"
			/>
			<Post />
			<Post />
		</div>
	);
}

export default Feed;
