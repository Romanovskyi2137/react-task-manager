import React from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TaskItem from "./TaskIItem";


function TaskList (props) {
    const {tasks, btnType} = props;
    if(tasks.length === 0){
      return (<h3 style={{textAlign: "center"}}>Список пустий.</h3>)
    };

    
    return (<TransitionGroup>
            {tasks.map(task => 
              <CSSTransition
                  key={task.id}
                  classNames="task"
                  timeout={500}
                  >
                  <TaskItem 
                  task={task} 
                  btnType={btnType}
                  startPoint={null}
                  endPoint={null}
                  />
              </CSSTransition>            
            )}
        </TransitionGroup>)
    
}

export default TaskList