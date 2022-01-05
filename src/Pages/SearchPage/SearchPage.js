import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import BookItem from '../../Components/BookItem/BookItem'
import * as BooksAPI from '../../BooksAPI'; 

export default function SearchPage() {
    
  const [myLib, setmyLib] = useState([]);
 
let [pageTitle, setpageTitle] = useState('');

// const [count, setcount] = useState(false)

  // async function search(keyword){
  //   setbuttonPressed(true)
  //   // setcount(true)
  //   let allBooks= await BooksAPI.search(keyword); 
  //   setmyLib(allBooks)
  //   setpageTitle(keyword);
    
  //   // prevState=>[...prevState,allBooks]
  // }

async function getKeyword(e) {

  if(e.target.value.length>0){ 
    let allBooks= await BooksAPI.search(e.target.value); 
    setmyLib(allBooks)
    setpageTitle(e.target.value);
  }
  else if(e.target.value.length===0) {
    console.log(e.target.value.length)
    setmyLib(prevState => prevState.length=0)
    console.log(myLib)
    setpageTitle('Search for Books');
    return}
    
}

  useEffect(() => {
    setpageTitle('Search for Books')
    setmyLib([])
  }, [])

    return (
        <div className=''>

            <div className='m-auto w-50 d-flex mt-4 align-items-center'>
              <NavLink to='/'>
            <i className="fas fa-arrow-left border p-2 border-1 me-1"></i>
            </NavLink>
              <input onChange={getKeyword} type="text" className='form-control' />
              {/* <button onClick={()=>search(keyword)} className=' btn btn-info ms-2'>search</button> */}
            </div>
            

            <div className="container">
              { Array.isArray(myLib) && myLib.length !== 0  ?<><h2 className='mt-5 text-warning text-center fw-bold text-capitalize'>{pageTitle}</h2>
                <div className="row mt-5 justify-content-between">                                
                        {myLib.map(book=><BookItem key={book.id} book={book} /> ) }
                </div></> : <h2 className='mt-5 text-warning text-center fw-bold text-capitalize'>no results found</h2>}

              {/* <h2 className='mt-5 text-warning text-center fw-bold text-capitalize'>{pageTitle}</h2>
                <div className="row mt-5 justify-content-between">                                      
                        {buttonPressed && Array.isArray(myLib) && myLib.length !== 0 ? myLib.map(book=><BookItem key={book.id} book={book} /> )  :   <h2 className='mt-5 text-warning text-center fw-bold text-capitalize'>no results found</h2>}                           
                </div> */}

            </div>
        </div>
    )
}
