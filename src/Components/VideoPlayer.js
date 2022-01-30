import React, { useContext } from 'react';
import { UrlContext } from '../Context/urlContext';
import ReactPlayer from 'react-player';
import DownloadIcon from '@mui/icons-material/Download';

function VideoPlayer() {
    const { url, setURL } = useContext(UrlContext);
    console.log(url);
    const onDownloadButtonHandler = () => {
        console.log('clickd');
    }
    return (
        <div className="mt-1 p-3">
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
            <button onClick={onDownloadButtonHandler} className='bg-blue-600 px-2 py-1 rounded mt-2 font-Manrope text-sm'> 
                <DownloadIcon className='text-xs'/> Download
            </button>
        </div>
    );
}

export default VideoPlayer;
