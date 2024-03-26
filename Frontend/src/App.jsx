import Home from './Pages/Home/Home';
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header';

function App() {

  return (
    <>
       <Header />
       <Outlet />
    </>
  )
}

export default App
