import React, { useContext } from 'react';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import { UrlContext } from '../Context/urlContext';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { getFileName } from '../utils/AllUtility';

const fs = window.require('fs');
const pathModule = window.require('path');
const { app, dialog } = window.require('@electron/remote');

function FileExplorer() {
    const { url, setURL } = useContext(UrlContext);
    const openFolderHandler = () => {
        dialog.showOpenDialog({
            properties: ['openFile', 'multiSelection']
        })
            .then(async data => {
                setURL({ currentURL: { url: data.filePaths }, allURL: [...url.allURL, data.filePaths] });                
                return data;
            })
            .catch(error => console.log(error));
    }
    const runFileHandler = (filePath) => {
        setURL({ currentURL: { url: filePath }, allURL: [...url.allURL] });
    }
    return (
        <div className='mt-3 ml-1 word-breaks p-2'>
            <button onClick={openFolderHandler} className="p-1 bg-blue-600 font-Manrope rounded text-sm">
                <FolderOpenIcon className='text-sm' /> Open Folder</button>
            {url.allURL && url.allURL.length > 0 && (<h5 className='font-Manrope mt-2 text-sm'>Recently played</h5>)}
            <div className='mt-2'>
                {url.allURL.map(item => {
                    const file = Array.isArray(item) ? item[0] : item.url
                    let fileName;
                    if (file) {
                        fileName = getFileName(file)
                    };
                    return <p className='text-sm font-Manrope font-medium my-2 cursor-pointer' onClick={runFileHandler.bind(this, file)}><VideoFileIcon />{fileName}</p>
                })}
            </div>
        </div>
    );
}

export default FileExplorer;
