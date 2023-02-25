import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Squad from './components/Squad/Squad';
import TextInput from './components/TextInput/TextInput';

function App() {
  const times= [
    {
      name: 'Programação',
      secondaryColor: '#D9F7E9',
      primaryColor: '#57C278'
    },
    {
      name: 'Front-End',
      secondaryColor: '#E8F8FF',
      primaryColor: '#82CFFA'
    },
    {
      name: 'Data Science',
      secondaryColor: '#F0F8E2',
      primaryColor: '#A6D157'
    },
    {
      name: 'Devops',
      secondaryColor: '#FDE7E8',
      primaryColor: '#E06B69'
    },
    {
      name: 'UX e Design',
      secondaryColor: '#FAE9F5',
      primaryColor: '#DB6EBF'
    },
    {
      name: 'Mobile',
      secondaryColor: '#FFF5D9',
      primaryColor: '#FFBA05'
    },
    {
      name: 'Inovação e Gestão',
      secondaryColor: '#FFEEDF',
      primaryColor: '#FF8A29'
    },
  ]
  const [employees, setEmployees] = useState([])
  return (
    <div className="App">
      <Banner/>
      <Form employees={employees} setEmployees={setEmployees}/>
      {times.map(time=>(
          <Squad key={time.name} name={time.name} primaryColor={time.primaryColor} secondaryColor={time.secondaryColor}/>
        ))}
    </div>
  );
}

export default App;
