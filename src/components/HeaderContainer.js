import React from 'react'
import './headercontainer.css'
import SearchBar from './SearchBar'
import IconComponent from './IconComponents'

const HeaderContainer = props => {
    return (
        <div className="header-container">
            <div className="header-logo-wrapper">
                <img className="logo-img" src="https://www.tribeofnoise.com/media/images/profile/49551/photo_1508489000.jpg" alt=""/>
                <p>| Instagram</p>
            </div>
                <SearchBar searchtext={props.searchtext} changeHandler={props.changeHandler} filterPostHandler={props.filterPostHandler}/>
            <div className="button-icons">
                    <IconComponent layout='icon-img' url="https://ya-webdesign.com/transparent250_/gps-icon-png-7.png" alt="location-image" />
                    <IconComponent layout='icon-img' url="https://ya-webdesign.com/transparent250_/heart-png-instagram-1.png" alt="heart-image" />
                    <IconComponent layout='icon-img' url="https://ya-webdesign.com/transparent250_/user-icon-png-8.png" alt="user-image" />
            </div>    
        </div>
    )
}

export default HeaderContainer