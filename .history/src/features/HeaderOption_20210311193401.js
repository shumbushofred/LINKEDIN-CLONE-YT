import { Avatar } from '@material-ui/core'
import React from 'react'
import "./HeaderOptions.css"
function HeaderOption({avator, Icon, title, onClick}) {
    return (
        <div onClick={onClick} className='headerOption'>
           {Icon && <Icon className='headerOption__icon' />} 
           {avator &&  <Avatar className='headerOption__icon' src={avator} />}
           <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption

