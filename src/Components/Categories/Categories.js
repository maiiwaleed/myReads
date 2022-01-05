import React from 'react'
import BookItem from '../BookItem/BookItem'


export default function Categories(props) {
    let {title,myLib}=props;
   
    let splitStr = title.toLowerCase().split(' ');
   for (let i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   
   title=splitStr.join(' ');
   let currentShelf= myLib.filter(book=> book.shelf ==  title.charAt(0).toLowerCase() + title.slice(1).replace(/\s/g, '')) ;


   

    return (
        <React.Fragment>
            <h2 className='ms-2 mt-2'>{title}</h2>
            <hr className='w-75 ms-2' />
            <div className="container">
                {/* map over book item */}
                <div className="row">
                    {currentShelf.map(book=>  <BookItem key={book.id} book={book} />)}
                 
                </div>
            </div>
        </React.Fragment>
    )
}
