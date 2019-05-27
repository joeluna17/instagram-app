import React from 'react'
import './postcontainer.css'
import CommentSection from './CommentSection'
import IconComponent from './IconComponents'


const PostContainer = props => {
        console.log(props.comments)
        return (
            <div className="post-container">
                <div className="upper-post-wrapper">
                    <img src={props.post.thumbnailUrl} alt="" />
                    <h3>{props.post.username}</h3>
                </div>
                <img src={props.post.imageUrl} alt=""/>
                <div className="like-icon-wrapper">
                <IconComponent layout="post-container-layout" url="https://ya-webdesign.com/transparent250_/heart-png-instagram-1.png" alt="heart"  liked={props.liked}/>
                <IconComponent layout="post-container-layout" url="https://ya-webdesign.com/transparent250_/chat-bubble-png-7.png" alt="bubble"/>
                    <p><strong>{props.post.likes} likes</strong></p>
                </div>
                    <CommentSection post={props} username ={props.username} text={props.text} changeHandler={props.changeHandler} comments={props.comments} key={props.commentKey}/>
            </div>
        )

}

export default PostContainer


