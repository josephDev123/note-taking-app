import './App.css';
import {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';
import Markdown from './components/Markdown';
import Header from './components/Header';
import {MarkdownContext} from './context/Markdown_context';
import {useSelector} from 'react-redux';



function App() {
  const [value, setValue] = useState();
  const [notes, setNotes] = useState([]);
  const [read, setRead] = useState(false);
  const [edit, setEdit] = useState({id:'', bol: false});
  
  const storeState =useSelector(state => state.note);
  useEffect(() => {
    setNotes(storeState.filter(item =>item.trash !==true ));
    return () => {
      setNotes('');
    }
  }, [storeState])
  


  return (
    <div>
        <Header/>
          <MarkdownContext.Provider value={{ setValue,  value, notes, setNotes, setRead, read, setEdit, edit}}>
              <div className="container-fluid bg-dark d-flex pt-2 flex-wrap justify-content-center ">
                  <Navbar/>
                  <NoteList/>
                  <Markdown/>
              </div>   
          </MarkdownContext.Provider>     
    </div>
   
  );
}

export default App;
