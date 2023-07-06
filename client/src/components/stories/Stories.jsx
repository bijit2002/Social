import React, { useContext } from 'react'
import './stories.scss'
import {AuthContext} from "../../context/authContext"

function Stories() {
    const {currentUser} = useContext(AuthContext)
    const stories = [
        {
            id: 1,
            name: 'john doe',
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 2,
            name: 'john doe',
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 3,
            name: 'john doe',
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 4,
            name: 'john doe',
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
    ]

    return (
        <div className='stories'>
            <div className='story'>
                <img src={currentUser.profilePic} />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className='story' key={story.id}>
                    <img src={story.img} />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories