import './Form.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

//Redux-Saga
import { addNewTaskSaga } from '../../redux/actionCreators/task'

//Redux-Thunk
// import { addTaskThunk } from '../../redux/thunks/addTaskThunk'
// import { addNewTask } from '../../redux/actionCreators/task';

//Redux
// import { errorHandler } from '../../redux/actionCreators/error';
// import { addLoader, removeLoader } from '../../redux/actionCreators/loader';


export default function Form() {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();
  

  // SAGA
  const submitHandler = async (event) => {
    event.preventDefault();
    dispatch(addNewTaskSaga(taskText.trim()))
    setTaskText('')  
  }
  // Thunk 
  // const submitHandler = async (event) => {
  //   event.preventDefault();
  //   dispatch(addTaskThunk(taskText.trim()))
  //   setTaskText('')
  // }
  // const submitHandler = async (event) => {
  //   event.preventDefault();
  //   if(taskText.trim()) {
  //     dispatch(addLoader());
  //     const response = await fetch('http://localhost:3001/task', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         text: taskText
  //       })
  //     })
  //     if (response.status === 200) {
  //       const { _id, text, status, editStatus } = await response.json()
  //       dispatch(addNewTask(String(_id), text.trim(), status, editStatus))
  //       setTaskText('')
  //       dispatch(removeLoader());
  //     }
  //     else {
  //       const error = await response.json()
  //       dispatch(errorHandler(response.status, error ))
  //     }
  //   }
  // }

  return (
    <div className="form-wrapper">
          <form onSubmit={submitHandler}>
              <div className="mb-3">
                <input onChange={(event) => { setTaskText(event.target.value)}} value={taskText} type="text" className="form-control" required/>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-light btn-sm">Add</button>
              </div>
          </form>
        </div>
  )
}
