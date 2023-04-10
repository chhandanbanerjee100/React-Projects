import { useState } from "react"


function BookCreate({onCreate}) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    onCreate(title);
    setTitle("");
  }
  return (
    <div>
      <div className="card offset-4 mb-3" style={{width: "30%"}}>
        <div className="card-body shadow">
          <input type="text" className="form-control mb-2" placeholder="Title" aria-label="Title" aria-describedby="basic-addon1" value={title} onChange={(e)=> setTitle(e.target.value)} />
          <button type="submit" onClick={handleSubmit} className="btn btn-dark mt-2">Save</button>
        </div>
      </div>
    </div>
  )
}

export default BookCreate
