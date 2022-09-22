import React, {useState} from "react";

const Counter = (props) => {
  let {value} = props;

  const formatCounter = () => {
    return  value === 0 ? 'empty' : value;
  }
  const getBadgeClasses = () => {
    let classes = 'badge m-2 ';
    classes += value === 0 ? 'bg-warning' : 'bg-primary';
    return classes;
  }

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBadgeClasses()}>{formatCounter()}</span>
      <button className='btn btn-primary btn-sm m-2' onClick={()=>props.onInc(props.id)}>+</button>
      <button className='btn btn-primary btn-sm m-2' onClick={()=>props.onDec(props.id)}>-</button>
      <button className='btn btn-danger btn-sm m-2' onClick={()=>props.onDelete(props.id)}>Delete</button>
    </div>
  )
}

export default Counter;