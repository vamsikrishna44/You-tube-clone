import React,{useState} from 'react';
import "./Header.css";

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
//import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch] = useState("");
  return (
    
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img
                        className="header__logo"
                        src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
                        alt=""
                    />
                </Link>
                
            </div>

        
            <div className="header__input">
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton"/>
                </Link>
                
            </div>
        
            <div className="header__icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsNoneIcon className="header__icon"/>
                <Avatar 
                    src="https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-9/126907801_190392479374482_1180581960869884766_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=X197_d8a5gUAX_VKCwd&_nc_ht=scontent.fhyd11-1.fna&oh=00_AfB3kg9jwCjuBnY4upqwIpn58S_AwC5LLKSSNXjIl20HMw&oe=6444D3BF"
                    alt="Vamsikrishna Setty"
                />
            </div>


    </div>
    
  );
}

export default Header;