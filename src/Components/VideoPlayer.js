import React  from 'react';
import ReactPlayer from 'react-player';
import DownloadIcon from '@mui/icons-material/Download';
import { useDispatch, useSelector } from 'react-redux';

function VideoPlayer() {
    const url = useSelector(state => state.url);
    const onDownloadButtonHandler = () => {
        console.log('clickd');
    }

    const link = /^https:/;
    return (
        <div className="mt-1 p-3">
            <ReactPlayer
                url={url.currentURL}
                controls
                height='400px'
                width='100%'
                playing={true}
                config={{
                    file: {
                        forceVideo: true,
                        forceAudio: true,
                    }
                }}
            />
            {link.test(url.currentURL) &&
                <button onClick={onDownloadButtonHandler} className='bg-blue-600 px-2 py-1 rounded mt-2 font-Manrope text-sm'>
                    <DownloadIcon className='text-xs' /> Download
                </button>
            }
        </div>
    );
}

export default VideoPlayer;
