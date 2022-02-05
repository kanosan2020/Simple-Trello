import React from 'react';
import { v4 as uuid } from 'uuid';


export const TaskAddInput = ({inputText, setInputText, setTaskList, taskList}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputText === '') {return; }
    // カードを追加する。
    setTaskList([...taskList,
    {
      id: taskList.length,
      draggableId: `task-${taskList.length}`,
      text: inputText,
    },
  ]);
  setInputText("");
  };

  const handleChange = (e) => {
    const taskId = uuid();
    setInputText(e.target.value);
  };
  return (
  <div>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='add a task' className='taskAddInput' onChange={handleChange} value={inputText} />
    </form>
  </div>
  );
};
