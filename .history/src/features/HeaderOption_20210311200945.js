import { Avatar } from '@material-ui/core'
import React from 'react'
import "./HeaderOptions.css"
import { selectUser } from './userSlice'
function HeaderOption({avator, Icon, title, onClick}) {
    const user = userSelector(selectUser);
    return (
        <div onClick={onClick} className='headerOption'>
           {Icon && <Icon className='headerOption__icon' />} 
           {avator &&  (
               <Avatar className="headerOption__icon">{user?.email[0]}</Avatar>
           )
           
           }
           <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption

