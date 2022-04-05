import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Characters from './components/Characters';
import Button from './components/Button';

function App() {

  const [characterList, setCharacterList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  
  useEffect(()=>{
    async function getCharacters (){
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      setCharacterList(response.data.results)
    }
    getCharacters()
  },[currentPage])

  const previousPage = () =>{
    currentPage > 1 && setCurrentPage(currentPage-1)
  }

  const nextPage = () =>{
    currentPage < 42 && setCurrentPage(currentPage+1)
  }

  return (
    <div className="App">
     <Characters characterList={characterList}/>

     <div className='paginacao'>
      <Button mudaPage={previousPage}>Page Anterior</Button>
      <p>{currentPage}</p>
      <Button mudaPage={nextPage}>Proxima Page</Button>
     </div>

    </div>
  );
}

export default App;
