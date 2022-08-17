import React, {useEffect, useState} from 'react';
import MusicList from '../components/MusicList';
import Song from '../components/Song';


const MusicContainer = () => {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);

    useEffect(() => {
        getSongs();
    }, []);

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(response => response.json())
        .then(data => setSongs(data.feed.entry))

    }

    const onSongClick = function(song){
           setSelectedSong(song);
    }

    const onSongSelected = function(song){
        setSelectedSong(song);
    }

    return(
        <div>
            <MusicList songs={songs} onSongClick={onSongClick}/>
            {selectedSong? <Song selectedSong={selectedSong} /> : null}


        </div>

    )

}

export default MusicContainer;