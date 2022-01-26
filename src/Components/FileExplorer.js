import React, { useContext } from 'react';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import { UrlContext } from '../Context/urlContext';

const fs = window.require('fs');
const pathModule = window.require('path');
const { app, dialog } = window.require('@electron/remote');


function FileExplorer() {    
    const { url, setURL } = useContext(UrlContext);
    const openFolderHandler = () => {
        const folderDir = dialog.showOpenDialog({
            properties: ['openFile', 'multiSelection']
        })
        .then( async data => {            
            setURL({currentURL:{url:data.filePaths},allURL: [...url.allURL, data.filePaths]});
            return data;
        })
        .catch(error => console.log(error));                
    }    
    return (
        <div>
            <button onClick={openFolderHandler}>Open folder</button>
            <h5>Recently played</h5>
            {url.allURL.map(item => {
                return <p><VideoFileIcon/>{item}</p>
            })}
        </div>
    );
}

export default FileExplorer;
