import todoLogo from './assets/todo-logo.svg'
import styles from './Header.module.css'
import {PlusCircle} from '@phosphor-icons/react'
import { v4 as  uuidv4  } from 'uuid';
import { useState } from 'react';

interface ITask{
   id :string,
        content:string,
        checked:boolean,
}
interface iCreateTask{
   onCreated: ({}:ITask) => void
}
export function Header({onCreated}:iCreateTask) {

const [ newTask, setNewTask ] = useState('')

function handleCreateTaskChange () {
        setNewTask(event.target.value)
    }
  function handleCreateTask():void {
    event?.preventDefault()
      onCreated({
        id: uuidv4(),
        content:newTask,
        checked:false
      })

      setNewTask('')
  
  }
  return (
   <div className={styles.header}>
    <img src={todoLogo} alt="" />

        <form className={styles.todoForm}>
            <input onChange={handleCreateTaskChange} value={newTask} type="text"  placeholder='Adicione uma nova Tarefa'/>
            <button onClick={handleCreateTask} type="submit">
                Criar
                <PlusCircle size={20}/> 
                </button>
        </form>
   
   </div>
  )
}

