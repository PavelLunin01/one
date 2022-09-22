import React from 'react';
import reactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import CountersList from "./components/countersList";

const App = () => {
  return <CountersList />;
};
reactDOM.render(<App />, document.querySelector('#root'));
