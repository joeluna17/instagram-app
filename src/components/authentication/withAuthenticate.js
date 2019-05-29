import React from "react"


const withAuthenticate = (Component) => class extends React.Component {
    constructor(props){
        super(props)    
    }

    render(){
        return(
            <Component {...this.props} /> //!!IMPORTANT NOTE: use props here instead of state as we do not have a state being set up as of yet and we are really looking to use the supers' props data being passed in not this one
        )
    }
}

export default withAuthenticate