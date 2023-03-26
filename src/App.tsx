import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header } from './Header'
import {  TodoList } from './TodoList'

import styles from './App.module.css'
import viteLogo from '/vite.svg'

interface ITodo{
    id: string,
    content: string,
    checked: boolean,
}
function App() {
   const todos: ITodo[]=[]
    const [allTodos, setAllTodos] = useState(todos)
    function handleTaskDelete(id:string){
      const taslFilted= allTodos.filter(t => {return t.id !== id})
      setAllTodos(taslFilted)      

    }

    function oncreateTask({checked,content,id}:ITodo){
      setAllTodos([...allTodos,{
        id,
        checked,
        content
      }])
    }

    function handleTaskComplete(id:String ){
      const taskCompleted = allTodos.map(task => {
        if(task.id === id){
          return{
            ...task,
           checked: !task.checked
          }
        }
        return task

      })

       setAllTodos(taskCompleted)   

    }

  return (
   <>
   <Header onCreated={oncreateTask}/>
   <div className={styles.wrapper}>
        
        <main>
          <TodoList 
          todos={allTodos}
          onDelete={handleTaskDelete}
          onComplete={handleTaskComplete}
          />
        </main>
      </div>
   
   </>
  )
}

export default App
