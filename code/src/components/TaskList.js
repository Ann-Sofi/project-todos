import React from 'react';
import { useSelector } from 'react-redux';
import { Task } from './Task';

export const TaskList = () => {
  const allTasks = useSelector((store) => (store.tasks))
  return (
    <div>
      {allTasks.map((task) => (
        <Task key={task.id} task={task} />
       ))}
    </div>
  )
}