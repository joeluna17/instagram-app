import React from 'react'
import './iconcomponent.css'
import { tsPropertySignature } from '@babel/types';

const someFunc = event => {
    alert('stop pushin me!')
}

const IconComponent = props => {
    return <img className={props.layout} src={props.url} alt={props.alt} onClick= {someFunc}/>

}

export default IconComponent;