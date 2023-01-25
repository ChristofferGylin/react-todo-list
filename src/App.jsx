import { useEffect, useState } from 'react'
import InputBar from './InputBar'
import List from './List';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {

    console.log('useEffect on first render');

    const dataFromStorage = JSON.parse(localStorage.getItem('data'));

    if (dataFromStorage) {
      console.log('dataFromStorage:');
      console.log(dataFromStorage);
      setData(dataFromStorage);
    }

  }, []);

  useEffect(() => {

    console.log('useEffect on update');

    localStorage.setItem('data', JSON.stringify(data));

  }, [data]);

  return (
    <div className="App flex flex-col w-full justify-start items-center">
      <InputBar data={data} setData={setData} />
      <List data={data} setData={setData} />
    </div>
  )
}

export default App
