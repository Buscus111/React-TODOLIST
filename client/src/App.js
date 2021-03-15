import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import { BrowserRouter as Router } from 'react-router-dom'
import List from './components/List/List';
import Error from './components/Error/Error';
import { useSelector } from 'react-redux';
import { useState } from 'react'
import TodoContext from './contexts/TodoContext'


function App() {
  const error = useSelector(state => state.error)
  const [test, setTest] = useState('intial state of variable "test"')
  console.log(test)

  return (
    <TodoContext.Provider value={{ test, setTest }}>
      <Router >
        <div className="App">
          <Header />
          {error.status ? (
            <div className="App-main">
              <Error />
            </div>) :
            (<div className="App-main">
              <Form />
              <List />
            </div>)
          }
        </div>
      </Router>
    </TodoContext.Provider>
  );
}

export default App;
