import React from 'react'
import Categories from '../../Components/Categories/Categories'
import Header from '../../Components/Header/Header'


export default function Home({myLib}) {
   
    let uniqueCat= ['Currently Reading','Want to Read','Read']
    
    return (
        <div>
            <Header />      
                {/* map over categories */}
                {uniqueCat.map((cat,index)=><Categories key={index} title={cat}  myLib={myLib}/>)}
           
        </div>
    )
}
