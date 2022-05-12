import "../styles/Header.css";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import { Avatar, Badge, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useUser from "../GlobalState";

function Header() {
	const user = useUser((state) => state.user);
	return (
		<div className="header">
			<div className="header__left">
				<img src="/img/fb_logo.png" alt="fb logo" />
				<div className="header__input">
					<SearchIcon />
					<input type="text" placeholder="Search Facebook" />
				</div>
			</div>
			<div className="header__center">
				<div className="header__option header__option--active">
					<HomeIcon fontSize="large" />
				</div>
				<div className="header__option">
					<PeopleAltOutlinedIcon fontSize="large" />
				</div>
				<div className="header__option">
					<SubscriptionsOutlinedIcon fontSize="large" />
				</div>
				<div className="header__option">
					<StoreOutlinedIcon fontSize="large" />
				</div>
				<div className="header__option">
					<VideogameAssetOutlinedIcon fontSize="large" />
				</div>
			</div>
			<div className="header__right">
				<div className="header__info">
					<Avatar src={user.photoURL} referrerPolicy="no-referrer" />
					<h4>{user.displayName}</h4>
				</div>
				<IconButton>
					<AddIcon />
				</IconButton>
				<IconButton>
					<Badge badgeContent={10} color="error" max={9}>
						<ForumIcon />
					</Badge>
				</IconButton>
				<IconButton>
					<Badge badgeContent={10} color="error" max={9}>
						<NotificationsActiveIcon />{" "}
					</Badge>
				</IconButton>
				<IconButton>
					<ExpandMoreIcon />
				</IconButton>
			</div>
		</div>
	);
}

export default Header;
