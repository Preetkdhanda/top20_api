import React from "react";
import Song from "./Song";

const MusicList = ({songs, onSongClick}) => {

    
   const singleSongs = songs.map((song, index) => {
    return <Song audio={song.link[1].attributes.href} image={song['im:image'][1].label} artist={song['im:artist'].label} title={song['im:name'].label} position={index + 1} key={song.id.attributes["im:id"]} onSongClick={onSongClick}/>
   })
    return (
     <div>
        <ul>
            {singleSongs}
        </ul>
    
  
  </div>

    )
    
}

export default MusicList;