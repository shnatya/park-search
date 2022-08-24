import './App.css';

import { useState, useEffect } from "react";
import { Route, Routes, useNavigate} from 'react-router-dom'
import NewComponent from './NewComponent';
import NewComponentCopy from './NewComponentCopy';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      
      <Routes>
          <Route path="/testing" element={<NewComponent count={count}/>} />
          <Route path="/" element={<NewComponentCopy count={count}/>} />
          <Route path="*" element={<NewComponentCopy count={count}/>} />
      </Routes>
    </div>
  );
}

export default App;

