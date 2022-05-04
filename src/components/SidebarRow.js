import { Avatar } from "@mui/material";
import "../styles/SidebarRow.css";

function SidebarRow({ src, Icon, title }) {
	return (
		<div className="sidebarRow">
			{src && <Avatar src={src} />}
			{Icon && <Icon />}
			<h4>{title}</h4>
		</div>
	);
}

export default SidebarRow;
