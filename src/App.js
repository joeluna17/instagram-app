import React from 'react';
import './App.css';
import DummyData from './dummy-data'
import HeaderContainer from './components/HeaderContainer'
import PostConatiner from './components/PostContainer'



class App extends React.Component {
      constructor(){
        super();
        this.state = {
          posts: DummyData,
          likeImg: "././assets/emptyheart.png"
        }
      }

render(){

  return (
    <div className="App">
          <div className="header-section">
                <HeaderContainer />
          </div>

          {
            this.state.posts.map(post => {
              return  <PostConatiner post={post} key={post.timestamp} like={this.state.likeImg}/>
            })
         }

    </div>
  );
}
}

export default App;
