import React from 'react'
import "./HeaderOptions.css"
function HeaderOptions({Icon, title}) {
    return (
        <div className='headerOption'>
           {Icon && <Icon className='headerOption__icon' />} 
           <h3>{title}</h3>
        </div>
    )
}

export default HeaderOptions

