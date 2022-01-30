import './App.css';
import InputComponent from './Components/InputComponent';
import VideoPlayer from './Components/VideoPlayer';
import { UrlProvider } from './Context/urlContext';
import FileExplorer from './Components/FileExplorer';
function App() {
  return (
    <UrlProvider >
      <div className='flex flex-row'>
        <div className="container p-2 w-3/4">
          <InputComponent />
          <VideoPlayer />
        </div>
        <div className='bg-neutral-800 w-1/4 break-words overflow-auto '>
          <FileExplorer />
        </div>
      </div>

    </UrlProvider>
  );
}

export default App;
