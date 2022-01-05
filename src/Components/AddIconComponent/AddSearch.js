
import React from 'react';
import { NavLink } from 'react-router-dom';



export default function AddSearch() {
    return (
        <div className='searchBtn bg-info rounded-circle p-3 position-fixed'>
            <NavLink to='/search' className='  position-relative  '>
             <i className="fa fa-plus translate-middle fa-2x" aria-hidden="true"></i>
        </NavLink>
        </div>
        
    )
}
