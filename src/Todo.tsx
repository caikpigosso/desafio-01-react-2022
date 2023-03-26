import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import styles from './Todo.module.css'

interface TaskProps {
    checked: boolean;
    content: string;
    id: string;
    onDelete: (id: string) => void;
    onComplete: (id: string) => void; 
}
export function Todo({checked, content, id, onDelete,onComplete}: TaskProps){
 function handleDeleteTask() {
        onDelete(id)
    }
    function handleCompleteTask() {
        onComplete(id)
    }

   
    return (
        <>
        <div className={styles.todo}>
           <button>
             {checked?
                <CheckCircle
                    size={24} 
                    weight="fill" 
                    onClick={handleCompleteTask}
                    color="#8284fa"
                />:
                <Circle 
                onClick={handleCompleteTask}
                    size={24} 
                    color="#4EA8DE"/>
              }
           </button>
           <div>
             <span className={checked?styles.taskCompleted:''}>
                {content}
            </span>
            <button className={styles.todoButtonDelete}>
                
                <Trash onClick={handleDeleteTask}/>
            </button>
           </div>
        </div>
        </>
    )
}