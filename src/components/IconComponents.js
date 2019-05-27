import React from 'react'
import './iconcomponent.css'


const someFunc = event => {
    alert('stop pushin me!')
}

const IconComponent = props => {
    return <img className={props.layout} src={props.url} alt={props.alt} onClick={props.liked}/>

}

export default IconComponent;