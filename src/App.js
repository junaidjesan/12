import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { WebRouter } from './Rout/MainRout.js/MainRout';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App md:w-[1480px] mx-auto">
      <RouterProvider router={WebRouter}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
