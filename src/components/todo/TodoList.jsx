import {  deleteActionTodo } from "../../redux";
import {useDispatch, useSelector} from "react-redux";

const TodoList = () => {
  const todos = useSelector ((state)=> state.todos)
  const dispatch = useDispatch();
  const deleteTodo = (index) => {
    console.log(index);
    dispatch(deleteActionTodo(index))
  }
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <div key={i} className="d-flex justify-content-between border w-50 m-auto my-3 align-items-center">
          <ul >
            <li className=" d-flex">
            <div className="text">
              <p>Title : {todo.title}</p>
              <p>Content : {todo.content}</p>
            </div>
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
