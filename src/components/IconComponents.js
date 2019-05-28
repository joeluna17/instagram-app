import React from 'react'
import './iconcomponent.css'




const IconComponent = props => {
    return <img className={props.layout} src={props.url} alt={props.alt} onClick={(e)=> props.liked(e,props.postId)}/>

}

export default IconComponent;