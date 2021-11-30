// import useFetch from './components/useFectch';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useEffect, useState } from 'react';
import Form from './components/Form';

function App() {
  const [items, setItems] = useState('')
  const getData = async () => {
    const res = await fetch('http://localhost:8000/tasks')
    const fetchTask = await res.json()
    setItems(fetchTask)
  };
  useEffect(() => {
    
    getData()

  }, [])

  const [showAdd, setShowAdd] = useState(false)
  const hide = () => setShowAdd(!showAdd)

  const addTask = async (task) => {  
    fetch('http://localhost:8000/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
    })
    .then(res => getData())  
    
  }

  // The Delete function
  const onDelete = (id) => {
    fetch('http://localhost:8000/tasks/' + id, {
      method: 'DELETE'
    }).then(res => res.ok ? getData(): console.log('Not Found'))

  };

  const onToggleReminder = (id)=>{
    let update = items.filter(item => item.id === id)
    let newUP= update.map(newIt => ({...newIt, reminder: !newIt.reminder}))
    console.log(id, update, newUP[0] )
    fetch('http://localhost:8000/tasks/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUP[0])
    }) 
    .then(res=> {
      if(res.status === 200){
        getData()
      }
    })  
  }


  return (
    <div className="App">
      <div className="app-header">
        <Header title="Task tracker" onToggle={hide} show={showAdd} />
      </div>
      <div>
        {showAdd && <Form onAdd={addTask} />}
      </div>
      <>
        {items && <Tasks onDelete={onDelete} tasks={items} onToggle={onToggleReminder} />}
      </>

    </div>
  );
}

export default App;
