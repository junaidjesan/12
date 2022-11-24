import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { WebRouter } from './Rout/MainRout.js/MainRout';

function App() {
  return (
    <div className="App md:w-[1480px] mx-auto">
      <RouterProvider router={WebRouter}></RouterProvider>
    </div>
  );
}

export default App;
