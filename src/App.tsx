import './css/App.css';
import Cover from './components/Cover';
import Principles from './components/Principles';
import Main from './components/Main';
import Jobs from "./components/Jobs";
import Footer from './components/Footer';

function App() {
  return (
    <div className="sans-serif">
      <Cover/>
      <Main />
      <Jobs/>
      <Footer/>
    </div>
  );
}

export default App;
