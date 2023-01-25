import { useEffect, useState } from 'react'
import InputBar from './InputBar'
import List from './List';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {

    const dataFromStorage = JSON.parse(localStorage.getItem('data'));

    if (dataFromStorage) {

      setData(dataFromStorage);

    }

  }, []);

  useEffect(() => {

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
