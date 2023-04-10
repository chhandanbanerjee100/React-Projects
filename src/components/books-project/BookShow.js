import { useState } from "react"
import BookEdit from "./BookEdit"

function BookShow({book, onDelete, onEdit}) {
  const [showEdit, setShowEdit] = useState(false);
  const handleSubmitBookShow = (id, title)=>{
    onEdit(id, title);
    setShowEdit(false);
  }

  let content = book.title
  if(showEdit){
    content = <BookEdit onEdit={onEdit} book={book} onSubmit={handleSubmitBookShow}/>
  }

  return (
    <div className="card shadow" style={{width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{content}</h5>
        <button className="text-primary mt-2" onClick={()=> setShowEdit(!showEdit)}>
          <i className="fa fa-pen"></i>
        </button>
        <button className="text-danger mx-3" onClick={()=> onDelete(book.id)}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  )
}

export default BookShow
