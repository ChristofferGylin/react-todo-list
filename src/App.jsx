import { useEffect, useReducer, useState } from 'react'
import InputBar from './InputBar'
import ListContainer from './ListContainer';
import reducer from './reducer';

function App() {

  const [state, dispatch] = useReducer(reducer, { data: [] });

  const getData = () => {

    const dataFromStorage = localStorage.getItem('gylin-todo-data');

    if (dataFromStorage) {

      const json = JSON.parse(dataFromStorage);
      dispatch({ type: 'data', payload: json });

    }

  }

  useEffect(() => {

    getData();

  }, []);

  useEffect(() => {



  }, [state.data]);

  return (
    <div className="App flex flex-col w-full justify-start items-center">
      <InputBar data={state.data} dispatch={dispatch} />
      <ListContainer data={state.data} dispatch={dispatch} />
    </div>
  )
}

export default App
