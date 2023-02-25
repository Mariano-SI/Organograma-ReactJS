import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import TextInput from './components/TextInput/TextInput';

function App() {
  const [employees, setEmployees] = useState([])
  return (
    <div className="App">
      <Banner/>
      <Form employees={employees} setEmployees={setEmployees}/>
    </div>
  );
}

export default App;
