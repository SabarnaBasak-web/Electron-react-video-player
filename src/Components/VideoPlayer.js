import React, { useContext } from 'react';
import { UrlContext } from '../Context/urlContext';
import ReactPlayer from 'react-player';

function VideoPlayer() {
    const { url, setURL } = useContext(UrlContext);
    console.log(url);
    const onDownloadButtonHandler = () => {
        console.log('clickd');
    }
    return (
        <div className="mt-5 p-3">
            <ReactPlayer
                url={url.currentURL.url}
                controls
                height='400px'
                width='100%'
                playing={true}
                config={{                   
                    file:{
                        forceVideo:true,
                        forceAudio: true,
                    }
                }}
            />
            <button onClick={onDownloadButtonHandler}>Click</button>
        </div>
    );
}

export default VideoPlayer;
