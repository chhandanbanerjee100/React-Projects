import BookCreate from './BookCreate';
import axios from "axios";
import BookList from './BookList';
import React, {useState, useEffect} from 'react'

function BookProject() {
  const [books, setBooks] = useState([]);
  const CreateBook = async (title)=>{
    if(title){
      // const newBook = { id: new Date().getTime().toString(), title}
      const response = await axios.post("http://localhost:3001/books",{
        title
      });
      setBooks([...books, response.data]);
    }
  }
  const DeleteById = async (id)=>{
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book)=> book.id !== id)
    setBooks(updatedBooks)
  }
  const EditById = async (id, title)=>{
    const response = await axios.put(`http://localhost:3001/books/${id}`, {title});
    const updatedBooks = books.map((book)=> {
      if(id===book.id){
        const updatedBook = {...book, ...response.data}
        return updatedBook;
        // return {...book, title}
      }
      return book;
    })
    setBooks(updatedBooks);
  }

  const getBooks = async ()=>{
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }

  useEffect(()=>{
    getBooks();
  },[])

  return (
    <>
      <BookCreate onCreate={CreateBook} />
      <BookList books={books} onDelete={DeleteById} onEdit={EditById} />
    </>
  )
}

export default BookProject
