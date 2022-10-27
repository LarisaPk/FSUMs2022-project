import '../styles/App.scss';
import TopBar from './TopBar';
import Navbar from './Navbar';
import LoginPage from './pages/LoginPage';
import AddNewPage from './pages/AddNewPage';
import MyMemesPage from './pages/MyMemesPage';
import MyAccountPage from './pages/MyAccountPage';
import {Routes,Route,Navigate} from 'react-router-dom';

function App() {

  let routes = <Routes>
                  <Route exact path="/" element={<LoginPage/>}/>
                  <Route path="*" element={<Navigate to="/"/>}/>
                  <Route exact path="/add_new_meme" element={<AddNewPage/>}/>
                  <Route exact path="/my_memes" element={<MyMemesPage/>}/>
                  <Route exact path="/my_account" element={<MyAccountPage/>}/>
                </Routes>

  return (
    <div className = "App">
      <div className = "content">
          <TopBar/>
          {routes}
      </div>
      <Navbar/>
    </div>
  );
}

export default App;
