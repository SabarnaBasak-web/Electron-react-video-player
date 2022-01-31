import './App.css';
import InputComponent from './Components/InputComponent';
import VideoPlayer from './Components/VideoPlayer';
import FileExplorer from './Components/FileExplorer';
import { Provider } from 'react-redux';
import Store from './Store/Store';

function App() {
  return (
    <Provider store={Store}>
      <div className='flex flex-row'>
        <div className="container p-2 w-3/4">
          <InputComponent />
          <VideoPlayer />
        </div>
        <div className='bg-neutral-800 w-1/4 break-words overflow-auto '>
          <FileExplorer />
        </div>
      </div>
    </Provider>

  );
}

export default App;
