import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
const fs = window.require('fs');
const pathModule = window.require('path');
const { app } = window.require('@electron/remote');

const fetchFileSize = () => {
    const path = app.getAppPath();
    const files = fs
        .readdirSync(path)
        .map(file => {
            const stats = fs.statSync(pathModule.join(path, file));
            return {
                name: file,
                directory: stats.isDirectory()
            }
        })
        .sort((a, b) => {
            if (a.directory === b.directory) {
                return a.name.localeCompare(b.name)
            }
            return a.directory ? -1 : 1;
        })
    return files;
}

function FileExplorer() {
    const files = fetchFileSize();
    console.log(files);
    return (
        <div>
            {files.map(item => {
                return <h1> <FolderIcon /> {item.name}</h1>
            })}
        </div>
    );
}

export default FileExplorer;
