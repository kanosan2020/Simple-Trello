import React from 'react';
import { TaskCard } from './TaskCard';
import { AddTaskCardButton } from './button/AddTaskCardButton';
import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';

export const TaskCards = () => {
  const reorder = (taskCardsList, startIndex, endIndex) => {
    // タスクを並び替える。
    const remove = taskCardsList.splice(startIndex, 1); // [1,2,3]
    taskCardsList.splice(endIndex, 0, remove[0]); // 2,1,3
  };

  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: "0",
      draggableId: "item0",
    },
  ]);


  const handleDragEnd = (result) => {
    reorder(taskCardsList, result.source.index, result.destination.index);

    setTaskCardsList(taskCardsList);
  }

  return (
  <DragDropContext onDragEnd={handleDragEnd}>
    <Droppable droppableId='droppable' direction='horizontal'>
      {(provided) => (
  <div className='taskCardsArea' {...provided.droppableProps} ref={provided.innerRef}>
    {taskCardsList.map((taskCard, index) => (
      <TaskCard 
      key={taskCard.id} 
      taskCardsList={taskCardsList}
      index={index}
      setTaskCardsList={setTaskCardsList}
      taskCard={taskCard}
      />
    ))}
    {provided.placeholder}
    <AddTaskCardButton 
    taskCardsList={taskCardsList} 
    setTaskCardsList={setTaskCardsList} />
  </div>
      )}
   </Droppable>
  </DragDropContext>
  );
};