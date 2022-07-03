import { useState } from "react";
import { useDispatch } from 'react-redux';
import {addTodoSlice} from "../../redux/features/todoSlice";


const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch= useDispatch()
  const handleSubmission = (e) => {
    e.preventDefault();
    dispatch(addTodoSlice({ title, content }));
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h3 className="text-muted mb-4">Add a TODO</h3>
      <form onSubmit={handleSubmission} className="mx-auto w-50 ">
        Title <br />
        <input
          className="form-control d-block "
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        Content <br />
        <input
          className="form-control d-block p-2"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button className="my-4 btn btn-primary btn-sm px-4" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
