import React from "react"




const withAuthenticate = PostPage => LoginPage => class extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loggedIn: false,
        }    
    }

    componentDidMount(){

       console.log(window.localStorage.getItem('users'))
       const users = JSON.parse(window.localStorage.getItem('users'));
       console.log(users)

            if (users[0].name === "jlunatic" ){
                         this.setState({
                                  loggedIn: true
                    })
                }else{
                    //alert("User is not logged in!")
                }
    }


    render(){
    
                if (this.state.loggedIn === true){
        return(  
            <PostPage {...this.props} /> //!!IMPORTANT NOTE: use props here instead of state as we do not have a state being set up as of yet and we are really looking to use the supers' props data being passed in not this one
            )
        } else {
            return (
                <LoginPage {...this.props}/>
            )
        }
    }
}  


 

export default withAuthenticate

