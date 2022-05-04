import Story from "./Story";
import "../styles/StoryReel.css";

function StoryReel() {
	return (
		<div className="storyReel">
			<Story
				image="/img/story/storyImage1.jpg"
				profileSrc="/img/story/storyProfile1.jpg"
				title="Santina Reichert"
			/>
			<Story
				image="/img/story/storyImage2.jpg"
				profileSrc="/img/story/storyProfile2.jpg"
				title="Esmeralda Huel"
			/>
			<Story
				image="/img/story/storyImage3.jpg"
				profileSrc="/img/story/storyProfile3.jpg"
				title="Andy Yost"
			/>
			<Story
				image="/img/story/storyImage4.jpg"
				profileSrc="/img/story/storyProfile4.jpg"
				title="Emily Oberbruner"
			/>
			<Story
				image="/img/story/storyImage5.jpg"
				profileSrc="/img/story/storyProfile5.jpg"
				title="Susan Waelchi"
			/>
		</div>
	);
}

export default StoryReel;
