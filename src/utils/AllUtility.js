export const getFileName = (fullPath) => {
    console.log(fullPath);
    const urlRegex = /^http/;
    if(fullPath)
    if(fullPath !== '' && !urlRegex.test(fullPath)){
        const filePath = fullPath.split('\\');
        const fileName = filePath[filePath.length - 1];
        return fileName;
    }
    return fullPath;
};