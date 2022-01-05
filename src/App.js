import React from 'react';

import {  useEffect, useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import './App.css'
import AddSearch from './Components/AddIconComponent/AddSearch';
import SearchPage from './Pages/SearchPage/SearchPage';
import Home from './Pages/Home/Home';
import * as BooksAPI from '../src/BooksAPI'; 
import { bookActions } from '../src/Store/book';



export default function BooksApp() {
  
  const dispatch = useDispatch();
  
    let reducerBooks=useSelector((state) => state.book.allBooks);
    reducerBooks= reducerBooks!=null ? Object.keys(reducerBooks).map((k) => reducerBooks[k]) :'';

  async function getAll(){
    let allBooks= await BooksAPI.getAll();
    dispatch(bookActions.updateBooks({books:allBooks }));
    
  }

  useEffect(() => {
    getAll()
    
  }, [])

 
  return (
    <React.Fragment>
      
    <AddSearch />
      <Routes>
      <Route path='/' element={<Home  myLib={reducerBooks}/>} />
        <Route path='/search' element={<SearchPage />} />
      
    </Routes>

    </React.Fragment>
  )
}


