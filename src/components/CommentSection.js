import React from 'react'
import './commentsection.css'


const CommentSection = props => {
  
    return(
            <div className="comment-section">
                {  props.post.post.comments.map(comment => {
                    return  <p><strong>{comment.username}</strong> {comment.text}</p>
                })
                }
            <input className="addcomment-input" placeholder="  Add a comment..."  type="text" name="comment"/>
            </div>
    )
}

export default CommentSection

