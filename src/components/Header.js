import "./Header.css";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import { Avatar, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<img src="/img/fb_logo.png" alt="fb logo" />
				<div className="header__input">
					<SearchIcon />
					<input type="text"  placeholder="Search Facebook"/>
				</div>
			</div>
			<div className="header__center">
				<div className="header__option header__option--active">
					<HomeIcon fontSize="large" />
				</div>
				<div className="header__option">
					<FlagIcon fontSize="large" />
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
					<Avatar />
					<h4>Tong Quang Truong</h4>
				</div>
				<IconButton>
					<AddIcon />
				</IconButton>
				<IconButton>
					<ForumIcon />
				</IconButton>
				<IconButton>
					<NotificationsActiveIcon />
				</IconButton>
				<IconButton>
					<ExpandMoreIcon />
				</IconButton>
			</div>
		</div>
	);
}

export default Header;
