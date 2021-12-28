import React, { useEffect, useState } from 'react';
import db from '../../firebase';
import Post from '../post/Post';
import TweetBox from '../tweetBox/TweetBox';
import './Feed.css';
import { collection, getDocs } from '@firebase/firestore';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const getTweets = () => {
        getDocs(collection(db, "posts")).then(querySnapshot => {
            let tempPosts = [];
            let finalPosts = [];
            querySnapshot.forEach(doc => {
                tempPosts.push({ id: doc.id, ...doc.data() });
                finalPosts = tempPosts.sort((a, b) => b.time - a.time);
            });
            setPosts([...finalPosts]);
        })
    };
    useEffect(() => {
        getTweets();
    }, []);
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox getTweets={getTweets} />
            {posts && posts.map((post) => (
                <Post
                    key={post.id}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}
        </div>
    );
};

export default Feed;