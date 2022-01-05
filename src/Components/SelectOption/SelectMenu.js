import React, {  useState } from 'react'

import * as BooksAPI from '../../BooksAPI'; 
import {  useDispatch,  useSelector } from 'react-redux';

import { bookActions } from '../../Store/book';

export default function SelectMenu({book}) {

    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState()

    let reducerBooks=useSelector((state) => state.book.allBooks);
    reducerBooks= reducerBooks!=null ? Object.keys(reducerBooks).map((k) => reducerBooks[k]) :'';

    let finShelf= reducerBooks.filter(libBook=>libBook.id==book.id)[0] ;
    let shelf=  finShelf==null||undefined ? 'move' : finShelf.shelf;
    

    function toggleShow() {
        setShowMenu(!showMenu);
    }

    async  function getSelected(e) {
        await BooksAPI.update(book,e.target.value);
        let allBooks= await BooksAPI.getAll();
        dispatch(bookActions.updateBooks({books:allBooks }));
        
    }
   
    return (
       
            <div onClick={toggleShow} className='selectDot rounded-circle bg-success position-absolute'>

                <div className='position-relative'>
                   
                   <i className="fa fa-sort-down position-absolute start-50  top-100" aria-hidden="true"></i>
                   
                   <select defaultValue={shelf} onChange={getSelected} className=' position-absolute top-100 '>
                        <option   value="move" disabled>Move to...</option>
                        <option  value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option  value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                  
                </div>
           
            </div>
        
    )
}
