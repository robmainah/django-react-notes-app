import './App.css';
import Header from './components/Header';
import NotesList from './pages/NotesList';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' Component={NotesList} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
