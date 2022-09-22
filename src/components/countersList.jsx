import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    {id: 0, value: 4, name: 'Ложка'},
    {id: 1, value: 2, name: 'Вилка'},
    {id: 2, value: 1, name: 'Нож'},
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (counterId) => {
    setCounters(counters.filter(counter => counter.id !== counterId));
  }
  const handleReset = () => {
    setCounters(initialState);
  }

  const handleInc = (counterId) => {
    setCounters(counters.map((count) => {
      if (count.id === counterId){
        count.value ++;
      }
      return count;
    }));
  }
  const handleDec = (counterId) => {
    setCounters(counters.map((count) => {
      if (count.id === counterId){
        count.value --;
      }
      if (count.value < 0) count.value = 0;
      return count;
    }));
  }
  return (
    <>
      {counters.map((count) => (
        <Counter key={count.id}
                 id={count.id}
                 value={count.value}
                 name={count.name}
                 {...count}
                 onDelete={handleDelete}
                 onInc={handleInc}
                 onDec={handleDec}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
    </>
  );
}

export default CountersList;