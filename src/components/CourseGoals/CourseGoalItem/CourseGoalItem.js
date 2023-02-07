import React, { useState } from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => {
  const [fin, setFin] = useState("");
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item">
      {props.children}
      <button className="delete" onClick={deleteHandler}>Delete</button>
    </li>
  );
};

export default CourseGoalItem;
