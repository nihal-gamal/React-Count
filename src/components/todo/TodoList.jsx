
import {useDispatch, useSelector} from "react-redux";
import {deleteTodoSlice} from "../../redux/features/todoSlice";

const TodoList = () => {
  const todos = useSelector (state=> state.todoSlice.todos)
  // console.log( useSelector((state)=> state));
  const dispatch = useDispatch();
  const deleteTodo = (index) => {
    console.log(index);
    dispatch(deleteTodoSlice(index))
  }
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <div key={i} className="d-flex justify-content-between border w-50 m-auto my-3 align-items-center form-control">
          <ul >
            <li  className="mt-4">
            
              <p>Title : {todo.title}</p>
              <p>Content : {todo.content}</p>
            
            </li>
          </ul>
          <button className="btn btn-danger d-block btn-sm" onClick={() => deleteTodo (i)}>x</button>
          </div>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );
  return (
    <div className="text-left">
      <h5 className="mx-5 text-muted">Todos List</h5>
      {todosList}
    </div>
  );
};

export default TodoList;
