import React from 'react';
import Button from './UI/Button/Button';


function TaskItem (props) {

            return (
                <div className="task__item">
                    <div style={{maxWidth: "75%"}}>
                        <i className={props.task.iconClassName} style={{marginBottom: "10px", marginRight: "20px"}}></i>
                        <h3 style={{marginBottom: "12px", display: "inline-block"}}>{props.task.title}</h3>
                        <p>{props.task.body}</p>
                    </div>
                    <div className="taskItem__btns">
                        <Button
                            onClick={() => props.onTaskReplace(props.task)}
                        >
                            {props.btnType}
                        </Button>  
                        <Button 
                            style={{marginTop: "10px"}}
                            onClick={() => props.onTaskDelete(props.task.title)}    
                        >
                            Видалити
                        </Button>
                    </div>
                 </div>
            )
    
}

export default TaskItem