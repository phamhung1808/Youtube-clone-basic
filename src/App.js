/* import styled from 'styled-components'; */
import './App.scss';
import Menu from './components/Menu';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Video from './pages/Video';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <>

      <div id='Container'>
        <BrowserRouter>
          <Menu />
          <div className='Main'>
            <NavBar />
            <Routes>
              <Route path='/'>
                <Route index element={<Home />} />
                <Route path='/video'>
                  <Route path=':id' element={<Video />} />
                </Route>
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
