import React from 'react';
import ItemList from './ItemList';

// import {FaTrashAlt} from 'react-icons/fa';



const Content = ({items,handleCheck,handleDelete}) => {
    // const name = "Vaidik";
   
  return (
    //this is known as fragment
    <>           
        {items.length ? (
          <ItemList 
          items = {items}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
          />
          
        ) : (
          <p style={{marginTop: '2rem'}}>Your list is Empty.</p>
        )}  
    </>
  )
}

export default Content