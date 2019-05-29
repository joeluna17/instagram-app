import React from "react"
import PostConatiner from "./PostContainer"



const PostPage = props => {

    return (
        <div>
        { 
          props.posts.map((post, postId) => { 
                 return<PostConatiner   post={post}
                                        key={post.timestamp} 
                                        username={props.username} 
                                        text={props.text} 
                                        addNewComment = {props.addNewComment} 
                                        changeHandler={props.changeHandler} 
                                        liked={props.likedHandler}
                                        postId={postId}    
                                                                         
                                        />       
                  
          })
               
       }
      </div>
    )
}


export default PostPage