import React from 'react'
import { Avatar } from '@material-ui/core'
import "./Post.css"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import ChatIcon from '@material-ui/icons/Chat';
import InputOption from './InputOption'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Post({name, description, message, photoUrl}) {
    const user = useSelector(selectUser);
    return (
        <div className='post'>
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{user.displayName}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpIcon} title="Like" color="gray" />
                <InputOption Icon={ChatIcon} title="Comment" color="gray" />
                <InputOption Icon={ShareIcon} title="Share" color="gray" />
                <InputOption Icon={SendIcon} title="Send" color="gray" />
            </div>
        </div>
    )
}

export default Post
