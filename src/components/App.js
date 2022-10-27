import '../styles/App.scss';
import TopBar from './TopBar';
import Navbar from './Navbar';

function App() {
  return (
    <div className = "App">
      <div className = "content">
          <TopBar/>
      </div>
      <Navbar/>
    </div>
  );
}

export default App;
