import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Squad from './components/Squad/Squad';


function App() {
  const squads= [
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
    }
  ]
  const [employees, setEmployees] = useState([])
  return (
    <div className="App">
      <Banner/>
      <Form employees={employees} setEmployees={setEmployees} squads={squads.map((squad)=>squad.name)}/>
      {squads.map(squad=>(
          <Squad 
            key={squad.name} 
            name={squad.name} 
            primaryColor={squad.primaryColor} 
            secondaryColor={squad.secondaryColor}
            employees={employees.filter((employee)=> employee.squad === squad.name)}
          />
        ))}
      <Footer/>
    </div>
  );
}

export default App;
