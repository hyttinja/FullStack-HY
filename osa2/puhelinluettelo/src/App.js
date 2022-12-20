import { useState, useEffect } from 'react'
import Filter from './Filter'
import Form from './Form';
import Persons from './Persons';
import Notification from './Notification';
import {getAll, create, update, deletePerson} from './services/persons';
import "./index.css";
const App = () => {
  
  const [persons, setPersons] = useState([])
  const [filter,setFilter] = useState("")
  const [newName, setNewName] = useState("")
  const [newPhoneNumber,setNewPhoneNumber] = useState("");
  const [message,setMessage] = useState({text:undefined,isError:false})
  
  const onSubmit = (event)=>{
    event.preventDefault()
    const existingPerson = persons.find((person)=>person.name === newName);
    if(existingPerson){
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        update(existingPerson.id,{name: newName,number:newPhoneNumber})
        .then(response =>{
          setPersons(persons.map(person => person.id === existingPerson.id ? response.data : person));
          setNewName("")
          setNewPhoneNumber("")
          setMessage({text: `Changed number of an ${existingPerson.name}`,isError:false})
          setTimeout(()=>{
            setMessage({text:undefined,isError:false})
          },3000)
        })
        .catch(error =>{
          setMessage({text: `Update failed for ${existingPerson.name}`,isError:true})
          setTimeout(()=>{
            setMessage({text:undefined,isError:false})
          },3000)
        })
      }
    }
    else {
      create({name: newName,number:newPhoneNumber})
      .then(response =>{
        setPersons(persons.concat(response.data));
        setNewName("")
        setNewPhoneNumber("")
        setMessage({text: `Added ${response.data.name}`,isError:false})
        setTimeout(()=>{
          setMessage({text:undefined,isError:false})
        },3000)
      })
      .catch(error =>{
        setMessage({text: `Create failed for ${newName}`,isError:true})
        setTimeout(()=>{
          setMessage({text:undefined,isError:false})
        },3000)
      })
    }
  }

  const onDelete = (person) =>{
    if(window.confirm(`Delete ${person.name}?`)){
      deletePerson(person.id)
      .then(response =>{
        setPersons(persons.filter(p => p.id !== person.id))
        setMessage({text: `Deleted ${person.name}`,isError:false})
        setTimeout(()=>{
          setMessage({text:undefined,isError:false})
        },3000)
      }).catch(error =>{
        setMessage({text: `Delete failed for ${person.name}`,isError:true})
        setTimeout(()=>{
          setMessage({text:undefined,isError:false})
        },3000)
      })
    }
  }

  useEffect(()=>{
    getAll()
    .then(response =>{
      setPersons(response.data)
    })
    .catch(error =>{
      setMessage({text: "Fetching phonebook failed",isError:true})
      setTimeout(()=>{
        setMessage({text:undefined,isError:false})
      },3000)
    })
  },[])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={(event) => setFilter(event.target.value)}/>
      <Notification message={message}/>
      <Form
        onSubmit={onSubmit}
        onNameChange={(event) => setNewName(event.target.value)}
        onNumberChange={(event) => setNewPhoneNumber(event.target.value)}
        newName={newName}
        newPhoneNumber={newPhoneNumber}
        />
      <Persons
        onDelete={onDelete}
        persons={persons}
        filter={filter}
      />

    </div>
  )

}

export default App