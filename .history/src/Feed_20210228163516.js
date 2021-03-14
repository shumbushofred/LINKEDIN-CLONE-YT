import "./Feed.css"
import Post from "./Post.js"
import InputOption from "./InputOption.js"
import ImageIcon from '@material-ui/icons/Image';
import React, {useState} from 'react'
import CreateIcon from '@material-ui/icons/Create';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
//import { CalendarToday, Subscriptions } from "@material-ui/icons";
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { PostAddSharp } from "@material-ui/icons";
function Feed() {
    const [post, setPosts] = useState([]);
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                      <input type="text"/>
                        <button>
                            send
                        </button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='photo' color="#70B5f9"/>
                    <InputOption Icon={SubscriptionsIcon} title='video' color="#7A33E" />
                    <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title='Write artile' color="#7FC15E" />

                </div>
            </div>
            {/* post  {Posts.map((post) => (< Post />))}*/}
           
            <Post name='Fred Shumbusho' description='This is a' message='walala' />
        </div>
    )
}

export default Feed
