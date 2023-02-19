import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Routes';

function App() {
  return (
    <div className='max-w-5xl mx-auto' data-theme="autumn">
      <RouterProvider router={router}>
        
      </RouterProvider>
    </div>
  );
}

export default App;
