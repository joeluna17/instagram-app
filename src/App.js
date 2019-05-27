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
          comments:[],
          likeImg: "././assets/emptyheart.png",
          username:"joe",
          text:""
        }
      }

 componentDidMount(){
   console.log("CDM executing") //delete me
      this.setState({
          posts: dummyData,  // setting the state object kvp "posts" when the bare minimum components are loaded this will happen after ther constructor medthod is called
          comments: dummyData.map(post => {
            return post.comments
          })
      })
  
 }  
 
 
 
 changeHandler = event => {
    this.setState({
        [event.target.name] : event.target.value
    })
 }
 
 addNewComment = (userName, text, id) => {
   console.log("soimething some iafa")
      const newComment = {
        username: userName,
        text: text
      }
          
  
  console.log(this.state.comments)
        
 }

 testingFunc = (event) =>{
      event.preventDefault()
   this.addNewComment("josenose", "just addins a comment", 1)
 }

 likedHandler = () => {
     this.setState(
        prevState => ({post: prevState.post.likes + 1})
     )
 }

render(){

  return (
    <div className="App">
          <div className="header-section">
                <HeaderContainer />
          </div>

          { 
            this.state.posts.map((post, index) => { 
                const newlist = []
                    for(let i = index; i === index; i++){
                          newlist.push( <PostConatiner  post={post}
                                                        key={post.timestamp} 
                                                        changeHandler={this.changeHandler} 
                                                        liked={this.likedHandler}
                                                        username={this.state.username} 
                                                        text={this.state.text} 
                                                        addNewComment = {this.addNewComment} 
                                                        comments={this.state.comments[i]} 
                                                        commentKey={i}
                                          /> )
                    }
                    return newlist;
            })
                 
         }

         <button onClick={this.testingFunc}>click me</button>

    </div>
  );
}
}

export default App;


// {
//   username: "philzcoffee",
//   thumbnailUrl:
//     "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",

//   imageUrl:
//     "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
//   likes: 400,
//   timestamp: "July 17th 2017, 12:42:40 pm",
//   comments: [
//     {
//       username: "philzcoffee",
//       text:
//         "We've got more than just delicious coffees to offer at our shops!"
//     },
//     {
//       username: "biancasaurus",
//       text: "Looks delicious!"
//     },
//     {
//       username: "martinseludo",
//       text: "Can't wait to try it!"
//     }
//   ]
// }

