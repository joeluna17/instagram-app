import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderContainer'
import PostConatiner from './components/PostContainer'
import  dummyData  from './dummy-data'







class App extends React.Component {
      constructor(){
        super();
        this.state = {
          posts: [],
          likeImg: "././assets/emptyheart.png",
          username:"joe",
          text:"", 
          searchtext: ""
        }
      }

 componentDidMount(){
   console.log("CDM executing") //delete me
      this.setState({
          posts: dummyData,  // setting the state object kvp "posts" when the bare minimum components are loaded this will happen after ther constructor medthod is called
      })
  
 }  
 
 
 changeHandler = event => {
    this.setState({
        [event.target.name] : event.target.value
    })
 }
 
 addNewComment = (e, postId) => {
  e.preventDefault();
  this.setState({
    posts: this.state.posts.map(post => {
      if (post.username === this.state.posts[postId].username) {
        post.comments = [
          ...post.comments,
          { username: this.state.username, text: this.state.text }
        ];
      }
      return post;
    }), text: ""
  });
};


 likedHandler = (e, postId) => {
   console.log(e,postId)
   this.setState({
        posts: this.state.posts.map((post,id) => {
           if(id === postId){
            post.likes = post.likes += 1
           }
           return post
          })  
       })
 }


 filterPostHandler = (e) => {
        console.log(e, this.state.searchtext)
        e.preventDefault()
       
        this.setState({
                posts: this.state.posts.filter(post => {
                   return post.username === this.state.searchtext
           }), searchtext:''
        })
 }

render(){

  return (
    <div className="App">
          <div className="header-section">
                <HeaderContainer  searchtext={this.state.searchtext} changeHandler={this.changeHandler} filterPostHandler={this.filterPostHandler} />
          </div>

          { 
            this.state.posts.map((post,postId) => { 
         
                   return<PostConatiner   post={post}
                                          key={post.timestamp} 
                                          changeHandler={this.changeHandler} 
                                          liked={this.likedHandler}
                                          username={this.state.username} 
                                          text={this.state.text} 
                                          addNewComment = {this.addNewComment} 
                                          postId={postId}    
                                                                           
                                          />       
                    
            })
                 
         }

    </div>
  );
}
}

export default App;



