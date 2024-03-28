import React, { useState } from 'react'
import './App.css'

type Task = {
  id: string
  title: string
  completed: boolean
}

function App() {
  // const [count, setCount] = useState(100)
  // const [tasks, setTasks] = useState<Task[]>([{
  //   id: '1',
  //   title: 'Tasks 1',
  //   completed: false
  // },{
  //   id: '2',
  //   title: 'Tasks 2',
  //   completed: false
  // }])
  const [tasks, setTasks] = useState<Task[]>([])
  const [input, setInput] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    
      event?.preventDefault()
      const task:Task = {
        id: crypto.randomUUID(),
        title: input,
        completed: false
      }
      setTasks([...tasks, task])
      setInput('')
  }

  function handleCheckboxChange(task: Task) :void{
    setTasks(tasks.map((t) => {
      if(t.id === task.id){
        return {
          ...task,
          completed: !task.completed,
        }
      }
      return t
    }))
  }

  return (
    <>
      <h1>TODOアプリ</h1>
      {tasks.length > 0 ?
        <>
          <h2>My Tasks</h2>
          <ul>
            {tasks.map((task:Task) => (
              <li key={task.id}>
                <input type='checkbox' checked={task.completed} onChange={() => handleCheckboxChange(task)}/>
                {task.completed ? <s>{task.title}</s> : task.title}
              </li>
          ))}
          </ul>
        </>:
      <p>タスクを追加してくださ い</p>
     }

     <form onSubmit={handleSubmit}>
      <input type='text' value={input} onChange={(event) => setInput(event.target.value)}/>
        <button type='submit'>Add Task</button>
      </form>
    </>
  )
}

export default App
