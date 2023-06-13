import './App.css';
import Header from './components/Header';
import Note from './pages/Note';
import NotesList from './pages/NotesList';
import { HashRouter as Router, Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path='/' Component={NotesList} />
            <Route path='/notes/:id' Component={Note} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
