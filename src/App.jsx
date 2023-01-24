import { useState } from 'react'
import InputBar from './InputBar'


function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App flex w-full justify-center">
      <InputBar data={data} setData={setData} />
    </div>
  )
}

export default App
