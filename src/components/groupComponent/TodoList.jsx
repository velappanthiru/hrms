import { Checkbox } from '@nextui-org/react'
import React, { useState } from 'react'
import { HiArrowSmDown, HiArrowSmUp } from 'react-icons/hi'

const TodoList = () => {

  const [taskList, setTaskList] = useState([
    {
      task: "check the client review changes",
      isCompleted: false,
      priority: "high"
    },
    {
      task: "complete the dashboard ui page",
      isCompleted: true,
      priority: "low"
    },
    {
      task: "add recharts functionality for attendance graph",
      isCompleted: false,
      priority: "high"
    },
    {
      task: "create todo list ui in dashboard page",
      isCompleted: true,
      priority: "low"
    },
    {
      task: "add todo list functionality",
      isCompleted: false,
      priority: "high"
    },
    {
      task: "create my team ui in dashboard page",
      isCompleted: true,
      priority: "low"
    },
  ]);

  const handleTodoOnChange = (clickedIndex) => {
    const updatedTaskList = taskList.map((task,index) => {
      if (index === clickedIndex) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTaskList(updatedTaskList);
  }

  return (
    <>
      {
        taskList && Array.isArray(taskList) && taskList?.map((item, idx) => (
          <div key={idx} className="todo-item flex justify-between items-center gap-4">
            <div className="checkbox-wrapper">
              <Checkbox isSelected={item?.isCompleted} radius="sm" onChange={()=>handleTodoOnChange(idx)}>
                <span className={`${item?.isCompleted ? 'line-through' : ''}`}>{item?.task}</span>
              </Checkbox>
            </div>
            <div className='flex items-center gap-0.5'>
              {
                item?.priority === "high" ? <>
                  <HiArrowSmUp color='#be123c' fontSize={16}/>
                  <p className='m-0 text-rose-700 dark:text-rose-500 text-base'>High</p>
                </> : <>
                  <HiArrowSmDown color='#0f766e' fontSize={16}/>
                  <p className='m-0 text-teal-700 dark:text-teal-500 text-base'>Low</p>
                </>
              }
            </div>
          </div>
        ))
      }
    </>
  )
}

export default TodoList
