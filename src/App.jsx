import { useState } from 'react'
import InputBar from './InputBar'
import List from './List';


function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App flex flex-col w-full justify-start items-center">
      <InputBar data={data} setData={setData} />
      <List data={data} />
    </div>
  )
}

export default App
