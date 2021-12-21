import './App.css';
import {useContext, useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';
import Markdown from './components/Markdown';
import Header from './components/Header';
import {MarkdownContext} from './context/Markdown_context';
import {useSelector} from 'react-redux';



function App() {
  const [value, setValue] = useState();
  const [notes, setNotes] = useState([]);
  const storeState =useSelector(state => state.note);
  // const {setNotes} = useContext(MarkdownContext);
  useEffect(() => {
    setNotes(storeState.filter(item =>item.status !== 'trash'));
    return () => {
      setNotes('');
    }
  }, [])
  


  return (
    <div>
        <Header/>
        <div className="container-fluid bg-dark d-flex pt-2 flex-wrap justify-content-center ">
          <MarkdownContext.Provider value={{ setValue,  value, notes, setNotes}}>
              <Navbar/>
              <NoteList/>
              <Markdown/>
          </MarkdownContext.Provider>
              
        </div>
    </div>
  );
}

export default App;
