import { useEffect, useReducer, useState } from 'react'
import InputBar from './InputBar'
import ListContainer from './ListContainer';
import reducer from './reducer';

function App() {

  const [state, dispatch] = useReducer(reducer, { data: [] });

  useEffect(() => {

    const dataFromStorage = JSON.parse(localStorage.getItem('data'));

    if (dataFromStorage) {

      dispatch({ type: 'data', payload: dataFromStorage });

    }

  }, []);

  useEffect(() => {

    localStorage.setItem('data', JSON.stringify(state.data));

  }, [state.data]);

  return (
    <div className="App flex flex-col w-full justify-start items-center">
      <InputBar data={state.data} dispatch={dispatch} />
      <ListContainer data={state.data} dispatch={dispatch} />
    </div>
  )
}

export default App
