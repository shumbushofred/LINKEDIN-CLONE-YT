import "./Feed.css"
import Post from "./Post.js"
import InputOption from "./InputOption.js"
import ImageIcon from '@material-ui/icons/Image';
import React, {useEffect, useState} from 'react'
import CreateIcon from '@material-ui/icons/Create';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
//import { CalendarToday, Subscriptions } from "@material-ui/icons";
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { PostAddSharp } from "@material-ui/icons";
import {db} from "./firebase";
import firebase from 'firebase';
function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
        setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
        )
        );
    }, []);
    
    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name:'Fred Shumbusho',
            description:'this is a test',
            message: input,
            photoUrl:'',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    };
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                      <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost}> 
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
            {/* post  */}
            {posts.map(({id, data: { name, description, message, photoUrl }}) => (< Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
            />))}
            
        </div>
    )
}

export default Feed
