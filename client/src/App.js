import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [data, setData] = useState(null)
  const fetchDatabaseInfo = async () => {
    fetch('http://localhost:5000/todoItems')
      .then(response => response.json())
      .then(data => setData(data))
  }

  useEffect( () => {
     fetchDatabaseInfo()
  }, [])

console.log(data)

const listTodoItems = () => {
  return data.map(item => <p>{item.description}</p>)
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {data && listTodoItems()}
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
