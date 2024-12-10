
import './App.css';
import { createBrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import Browse from './components/Browse';
import { RouterProvider } from 'react-router-dom';


import Error from './components/Error';
import MovieDetails from './components/MovieDetails';
import Search from './components/Search';

function App() {

 
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element:<Login/>
    },
    {
      path : "/browse",
      element:<Browse/>
    },
    {
      path : "/error",
      element:<Error/>
    },
    {
      path:"/moviedetails",
      element:<MovieDetails/>
    },
    {
      path:"/search",
      element:<Search/>
    }

  
  ])



  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;

