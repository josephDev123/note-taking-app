import './App.css';
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';
import Markdown from './components/Markdown';
function App() {
  return (
    <div className="container-fluid bg-dark d-flex pt-2">
      <Navbar/>
      <NoteList/>
      <Markdown/>
    </div>
  );
}

export default App;
