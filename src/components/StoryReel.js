import Story from "./Story";
import "../styles/StoryReel.css";
import { useEffect, useState } from "react";

const storyArray = [
	{
		image: "/img/story/storyImage1.jpg",
		profileSrc: "/img/story/storyProfile1.jpg",
		title: "Santina Reichert",
	},
	{
		image: "/img/story/storyImage2.jpg",
		profileSrc: "/img/story/storyProfile2.jpg",
		title: "Esmeralda Huel",
	},
	{
		image: "/img/story/storyImage3.jpg",
		profileSrc: "/img/story/storyProfile3.jpg",
		title: "Andy Yost",
	},
	{
		image: "/img/story/storyImage4.jpg",
		profileSrc: "/img/story/storyProfile4.jpg",
		title: "Emily Oberbruner",
	},
	{
		image: "/img/story/storyImage5.jpg",
		profileSrc: "/img/story/storyProfile5.jpg",
		title: "Susan Waelchi",
	},
];

function StoryReel() {
	const [story, setStory] = useState(storyArray);

	const resize = () => {
		if (window.innerWidth < 420) {
			setStory([storyArray[0], storyArray[1], storyArray[2]]);
		} else if (window.innerWidth <= 525) {
			setStory([storyArray[0], storyArray[1], storyArray[2], storyArray[3]]);
		} else setStory(storyArray);
	};

	useEffect(() => {
		resize();
		window.addEventListener("resize", resize);
		return function cleanup() {
			window.removeEventListener("resize", resize);
		};
	}, []);

	return (
		<div className="storyReel">
			{story.map((item, index) => (
				<Story
					key={index}
					image={item.image}
					profileSrc={item.profileSrc}
					title={item.title}
				></Story>
			))}
		</div>
	);
}

export default StoryReel;
