
import SelectMenu from '../SelectOption/SelectMenu'

export default function BookItem({book}) {
    
 
    return (
        
        <div className="col-md-2 p-2 me-1 ">
            <div className="imageAndSelect position-relative">
                    <img className='' src={book.imageLinks ? book.imageLinks.smallThumbnail: null} alt="" />
                    <SelectMenu book={book} shelf={book.shelf}/>

            </div>
           
                    <h5 className='my-2 mt-4 fs-5 fw-bold'>{book.title}</h5>
                    {book.authors ? book.authors.map((author,ind)=><p  className='my-0' key={ind}>{author}</p>) : []}
            
        </div>
        
    )
}
