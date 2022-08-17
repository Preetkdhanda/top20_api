import React from "react";



const Song = ({key, image, artist, title, position, audio})=> {
    return(
        <div>
        <p>{key}</p>
        <p>{position}</p>
        <p>{title}</p>
        <p>{artist}</p>
        <img src={image} alt="oops"/>
        <audio controls src={audio} type="audio/mpeg"></audio>

        </div>
    )

}

export default Song;