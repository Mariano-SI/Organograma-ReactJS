import React, { useState } from 'react'
import Button from '../Button/Button'
import Select from '../Select/Select'
import TextInput from '../TextInput/TextInput'
import "./Form.css"
const Form = (props) => {

  const times= [
    "Programação",
    "Front-end",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão"
  ]
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [image, setImage] = useState('')
  const [squad, setSquad] = useState('')
  


  function onSave(e){
      e.preventDefault()
      props.setEmployees([...props.employees, {name,role,image,squad}])
      setName('')
      setRole('')
      setImage('')
      setSquad('')
      console.log(props.employees)
  }
  return (
    <section className='formContainer'>
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextInput  label="Nome" placeholder="Digite seu nome"  value={name} setValue={setName} required/>
        <TextInput  label="Cargo" placeholder="Digite seu cargo" value={role} setValue={setRole} required/>
        <TextInput   label="Imagem" placeholder="Digite o endereço da imagem" value={image} setValue={setImage}/>
        <Select label="Time" itens={times} value={squad} setValue={setSquad}/>
        <Button>Criar card</Button>
      </form>
    </section>

  )
}

export default Form