import React, { useState } from 'react'

function SearchBar({onSubmit}) {
  const [item, setItem] = useState('');

  const handleFormSubmit = (e)=>{
    e.preventDefault();
    onSubmit(item);
    setItem("");
  }
  return (
    <div className='App'>
      <form onSubmit={handleFormSubmit}>
        <input value={item} onChange={(e)=> setItem(e.target.value)} />
      </form>
    </div>
  )
}

export default SearchBar
