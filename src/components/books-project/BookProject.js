import BookCreate from './BookCreate';
import BookList from './BookList';
import React, {useState} from 'react'

function BookProject() {
  const [books, setBooks] = useState([]);
  const CreateBook = (title)=>{
    if(title){
      const newBook = { id: new Date().getTime().toString(), title}
      setBooks([...books, newBook])
    }
  }
  const DeleteById = (id)=>{
    const updatedBooks = books.filter((book)=> book.id !== id)
    setBooks(updatedBooks)
  }
  const EditById = (id, title)=>{
    const updatedBooks = books.map((book)=> {
      if(id===book.id){
        const updatedBook = {...book, title}
        return updatedBook;
        // return {...book, title}
      }
      return book;
    })
    setBooks(updatedBooks);
  }

  return (
    <>
      <BookCreate onCreate={CreateBook} />
      <BookList books={books} onDelete={DeleteById} onEdit={EditById} />
    </>
  )
}

export default BookProject
