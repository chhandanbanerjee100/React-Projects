import React, {useState} from 'react'
import SearchImages from '../../api';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
function Api_Project() {
  // Since func SearchImages is an asynchronous func. therefore it always returns a promise that may or may not be fulfilled. also it takes time. so therefore you have to put await before it so that the other codes can run after the await term. ans we are using await, the function also has to be asynchronous.

  const [images, setImages] = useState([]);

  const handleSubmit = async (term)=>{
    const result = await SearchImages(term);
    // console.log(result);
    setImages(result);
  }

  return (
    <div className='mt-3'>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images} />
  </div>
  )
}

export default Api_Project
