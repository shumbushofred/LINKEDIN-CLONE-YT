import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
//import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications';
function Header() {
    return (
        <div className='header'>
            
        <div className="header__left">

             <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
             <div className="header__search" >
                <SearchIcon />
                 <input placeholder="search" type="text"/>
             </div>
        </div>

        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notification" />
            <HeaderOption avator="https://i.ibb.co/F4v3NQL/Fred.png" title='me'/>
        </div>
        </div>
    )
}

export default Header
