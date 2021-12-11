import React, { useState } from 'react';
import db from '../../firebase';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";
import { collection, addDoc } from "firebase/firestore";

const TweetBox = ({ setTempVar }) => {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = async (e) => {
        e.preventDefault();
        if (tweetMessage) {
            setTempVar(true);
            await addDoc(collection(db, "posts"), {
                displayName: "Kumar Shanu",
                username: "kumarshanu360",
                verified: true,
                text: tweetMessage,
                image: tweetImage,
                avatar:
                    "https://media.istockphoto.com/vectors/boy-mascot-avatar-or-gamer-boy-logo-vector-vector-id1278776622?k=20&m=1278776622&s=170667a&w=0&h=P0hp26Mon4HJ7Yr0ortXEdp63Dq-ifyQw4STZKkMRkA=",
            });
            setTweetMessage('');
            setTweetImage('');
        }
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://media.istockphoto.com/vectors/boy-mascot-avatar-or-gamer-boy-logo-vector-vector-id1278776622?k=20&m=1278776622&s=170667a&w=0&h=P0hp26Mon4HJ7Yr0ortXEdp63Dq-ifyQw4STZKkMRkA=" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton"
                >
                    Tweet
                </Button>
            </form>
        </div>
    );
};

export default TweetBox;