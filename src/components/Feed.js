import "./Feed.css";
import StoryReel from "./StoryReel";
import CreatePost from "./CreatePost";
function Feed() {
	return (
		<div className="feed">
			<StoryReel />
			<CreatePost />
		</div>
	);
}

export default Feed;
