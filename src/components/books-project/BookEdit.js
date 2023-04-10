import { useState } from "react";
function BookEdit({book, onSubmit}) {
  const [title, setTitle] = useState(book.title);

  const handleSubmit = (e)=>{
    e.preventDefault();
    onSubmit(book.id, title);
  }
  return (
    <>
      <div className="card mb-3" style={{ width: "15rem" }}>
        <div className="card-body shadow">
          <input type="text" className="form-control mb-2" placeholder="Title" aria-label="Title" aria-describedby="basic-addon1" value={title} onChange={(e) => setTitle(e.target.value)} />
          <button type="submit" onClick={handleSubmit} className="btn btn-dark mt-2">Save</button>
        </div>
      </div>
    </>
  )
}

export default BookEdit
