import './List.css';
import Loader from '../Loader/Loader';
import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { errorHandler } from '../../redux/actionCreators/error'
//Redux
import {
        //  deleteTask, 
        //  changeStatus, 
        //  editTask, 
        //  editButtonTask,
         addAllTasks, 
        } from "../../redux/actionCreators/task";
//Redux-Thunk
// import { deleteTaskThunk } from '../../redux/thunks/deleteTaskThunk';
// import { statusChangeThunk } from '../../redux/thunks/statusChangeThunk';
// import { editStatusChangeThunk } from '../../redux/thunks/editStatusChangeThunk';
// import { addEditedTaskThunks } from '../../redux/thunks/addEditedTaskThunks';
//Redux-Saga
import { deleteTaskSaga } from '../../redux/actionCreators/task'
import { changeStatusSaga } from '../../redux/actionCreators/task'
import { editButtonTaskSaga } from '../../redux/actionCreators/task'
import { editTaskSaga } from '../../redux/actionCreators/task'


export default function List() {
  const todoList = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3001/tasks')
      const tasks = await response.json()
      dispatch(addAllTasks(tasks))
    })()
  }, [])

  

  //Redux-Saga  
  const deleteButtonHandler = async (id) => {
    dispatch(deleteTaskSaga(id))
  }

  //Thunk
  // const deleteButtonHandler = async (id) => {
  //   dispatch(deleteTaskThunk(id))
  // }
  //Redux
  // const deleteButtonHandler = async (id) => {
  //   const response = await fetch('http://localhost:3001/task', {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         id
  //       })
  //     })
  //     if (response.status === 200) {
  //       dispatch(deleteTask(id))
  //     }
  //     else {
  //       const error = await response.json()
  //       dispatch(errorHandler(response.status, error ))
  //     }
  // }
 
  //Redux-Saga
  const statusHandeler = async (id) => {
    dispatch(changeStatusSaga(id))
  }
  //Thunk
  // const statusHandeler = async (id) => {
  //   dispatch(statusChangeThunk(id))
  // }
  //Redux
  // const statusHandeler = async (id) => {
  //   const response = await fetch('http://localhost:3001/task/status', {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         id
  //       })
  //     })
  //     if (response.status === 200) {
  //       dispatch(changeStatus(id))
  //     }
  //     else {
  //       const error = await response.json()
  //       dispatch(errorHandler(response.status, error ))
  //     }
  // }

  //Redux-Saga
  const editButtonHandler = async (id) => {
    dispatch(editButtonTaskSaga(id))
  }
  //Thunk
  // const editButtonHandler = async (id) => {
  //   dispatch(editStatusChangeThunk(id))
  // }
  //Redux
  // const editButtonHandler = async (id) => {
  //   const response = await fetch('http://localhost:3001/task/edit-status', {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         id
  //       })
  //     })
  //     if (response.status === 200) {
  //       dispatch(editButtonTask(id))
  //     }
  //     else {
  //       const error = await response.json()
  //       dispatch(errorHandler(response.status, error ))
  //     }
  // }
  
  //Redux-Saga
  const editSumbitHandler = async (event, id) => {
    event.preventDefault()
    const text = event.target.edit.value
    dispatch(editTaskSaga(text, id))
  }

  //Thunk
  // const editSumbitHandler = async (event, id) => {
  //   event.preventDefault()
  //   dispatch(addEditedTaskThunks(event, id))
  // }
  //Redux
  // const editSumbitHandler = async (event, id) => {
  //   event.preventDefault()
  //   const response = await fetch('http://localhost:3001/task/edit', {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         newText: event.target.edit.value,
  //         id
  //       })
  //     })
  //     if (response.status === 200) {
  //       dispatch(editTask(event.target.edit.value, id))
  //     }
  //     else {
  //       const error = await response.json()
  //       dispatch(errorHandler(response.status, error ))
  //     }
  // }

  return (
    <div className="todos-wrapper">
      <Loader />
      {
        todoList?.length ?
        todoList.map( el => 
          <div key={el._id}>
            <ul>
              <div  className="one-todo-wrapper">
                <li className="m-5"> 
                  {
                    el.editStatus ? 
                    (
                    <form className="d-flex" onSubmit={(event) => editSumbitHandler(event, el._id)}>
                      <div >
                        <input name='edit' type="text" defaultValue={el.text} className="form-control" required/>
                      </div>
                      <div className="d-flex " >
                        <button type="submit" className="btn btn-light btn-sm">Add</button>
                      </div>
                    </form>
                    ) :
                    <p className={el.status ? 'done-todo' : null }>{el.text}</p>
                  }
                    
                </li>
                <div className="d-flex">
                  <div className="form-check" >
                      <input defaultChecked={el.status} onClick={() => statusHandeler(el._id)} className="form-check-input" type="checkbox" id="flexCheckDefault" />
                  </div>
                  <button onClick={() => deleteButtonHandler(el._id)} className="btn btn-light btn-sm">Delete</button>
                  <button onClick={() => editButtonHandler(el._id)} className="btn btn-light btn-sm">Edit</button>
                </div>
              </div>
            </ul>    
          </div>
        
        ) :
        <span>No todo to do...</span>
      }
    </div>
  )
}
