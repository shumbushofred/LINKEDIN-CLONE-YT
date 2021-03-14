import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice'
import "./Sidebar.css"
function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) =>(
        <div className="sidebar__recentItem">

            <span className="sidebar__hash">#</span>
                
                <p>
                   {topic}
                </p>
            </div>
    
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=60" alt=""/>
                <Avatar className="sidebar__avator"/>

                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
            <div className="siderbar__stat">
            <p>who viewed you</p>
            <p className="siderbar__statNumber">2,454</p>

            </div>
            <div className="siderbar__stat">
            <p>Views on post</p>
            <p className="siderbar__statNumber">2,314</p>

            </div>
            </div>
            <div className="siderbar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar
