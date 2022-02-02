import React from 'react';
import VideoFileIcon from '@mui/icons-material/VideoFile';

import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { getFileName } from '../utils/AllUtility';
import { useDispatch, useSelector } from 'react-redux';
import { addURL, runLink } from '../Store/Actions';

// const fs = window.require('fs');
// const pathModule = window.require('path');
const { dialog } = window.require('@electron/remote');

function FileExplorer() {
    const url = useSelector(state=>state);
    console.log(url);
    const dispatch = useDispatch();
    const openFolderHandler = () => {
        dialog.showOpenDialog({
            properties: ['openFile', 'multiSelection']
        })
            .then(async data => {              
                dispatch(addURL(data.filePaths));           
                return data;
            })
            .catch(error => console.log(error));
    }
    const runFileHandler = (filePath) => {
        dispatch(runLink(filePath));  
    }
    return (
        <div className='mt-3 ml-1 word-breaks p-2'>
            <button onClick={openFolderHandler} className="p-1 bg-blue-600 font-Manrope rounded text-sm">
                <FolderOpenIcon className='text-sm' /> Open Folder</button>
            {url.allURL && url.allURL.length > 0 && (<h5 className='font-Manrope mt-2 text-sm'>Recently played</h5>)}
            <div className='mt-2'>
                {url.allURL.map(item => {
                    console.log(item);
                    const file = Array.isArray(item) ? item[0] : item
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
