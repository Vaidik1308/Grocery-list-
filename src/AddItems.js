import React from 'react'
import {FaPlus} from 'react-icons/fa';
// import styled from 'styled-components';
import {useRef} from 'react';

function AddItems({newItem,setNewItem,handleSubmit}) {
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">

        </label>
        <input
            autoFocus 
            ref={inputRef}
            type="text"
            id='addItem'
            placeholder='Add Item..'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button
            type='submit'
            aria-label='Add Items'
            onClick={() => inputRef.current.ocus()} // because we are using an icon as a button
        >
            <FaPlus />
        </button>

    </form>
  )
}

export default AddItems;
