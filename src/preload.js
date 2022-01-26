const path = require('path');
const fetchedData = require('./')
window.addEventListener('DOMContentLoaded', () => {
  console.log('preload.js');
  console.log(path.join(__dirname));
  // const replaceText = (selector, text) => {
  //   const element = document.getElementById(selector)
  //   if (element) element.innerText = text
  // }

  // for (const type of ['chrome', 'node', 'electron']) {
  //   replaceText(`${type}-version`, process.versions[type])
  // }
  
})


