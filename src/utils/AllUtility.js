export const getFileName = (fullPath) => {    
    const urlRegex = /^http/;
    if(fullPath !== '' && !urlRegex.test(fullPath)){
        const filePath = fullPath.split('\\');
        const fileName = filePath[filePath.length - 1];
        return fileName;
    }
    return fullPath;
};