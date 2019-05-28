import React from 'react'
import './commentsection.css'






    const CommentSection = props => {

    return(
            <div className="comment-section">
                {  
                    props.post.comments.map( (comment, index) => {
                    return  <p key={index} ><strong>{comment.username}</strong> {comment.text}</p>
                })
                }

                <form onSubmit={(e)=> props.addNewComment(e,props.postId)}>
                        <input className="addcomment-input" placeholder="  Add a comment..." value={props.text} onChange={props.changeHandler} type="text" name="text" />
                </form>
            </div>
    )
 }


export default CommentSection

