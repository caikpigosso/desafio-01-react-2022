import { ClipboardText } from '@phosphor-icons/react'
import { Todo } from './Todo'
import styles from './TodoList.module.css'

interface ITodo{
    id: string,
    content: string,
    checked: boolean,
}
interface Alltodos{
    todos: ITodo[],
    onDelete: (id: string) => void;
    onComplete: (id: string) => void; 
}

export function TodoList({todos,onDelete,onComplete}:Alltodos){
 

    return (
        <div className={styles.todo}>
            <header className={styles.todoHeader}>
                <div className={styles.todoCreated}>
                    <strong>Tarefas Criadas</strong>
                    <span>{todos.length}</span>
                </div>
                <div className={styles.todoFinished}>
                    <strong>Concluídas</strong>
                    <span>{todos.length === 0 ? 0:
                     `${ todos.filter(item => item.checked).length  
                        } de ${todos.length}`}</span>
               </div>
            </header>
            {todos.length>0
            ?
             todos.map(todo =>{
                return (
                    <Todo 
                    key={todo.id} 
                    content={todo.content}
                    checked={todo.checked}
                    id={todo.id}
                    onDelete={onDelete}
                    onComplete={onComplete}
                    />
                )
             })
             :
            <div className={styles.todoList}>
                <div className={styles.noHaveTodo}>
                    <ClipboardText size={64}/>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
            </div> }
            </div>
    )
}