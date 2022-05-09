import "../styles/Sidebar.css";
import SidebarRow from "./SidebarRow";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import StoreIcon from "@mui/icons-material/Store";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStateValue } from "../StateProvider";

function Sidebar() {
	const [{ user }, dispatch] = useStateValue();

	return (
		<div className="sidebar">
			<SidebarRow src={user.photoURL} title={user.displayName} />
			<SidebarRow Icon={PeopleIcon} title="Friend" />
			<SidebarRow Icon={GroupsIcon} title="Group" />
			<SidebarRow Icon={StoreIcon} title="Marketplace" />
			<SidebarRow Icon={SubscriptionsIcon} title="Watch" />
			<SidebarRow Icon={AccessTimeIcon} title="Memories" />
			<SidebarRow Icon={ExpandMoreIcon} title="More" />
		</div>
	);
}

export default Sidebar;
