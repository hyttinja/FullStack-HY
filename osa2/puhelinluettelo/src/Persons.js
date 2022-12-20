const Persons = ({persons, filter, onDelete}) =>{
    return(
        <>
         <h2>Numbers</h2>
        <ul>
        {filter === "" ? 
        persons.map(person =>
            <li key={person.id}>{person.name} {person.number}<button onClick={() => onDelete(person)}>delete</button></li> 
        ):
        persons.filter(person => person.name.includes(filter)).map(person =>
            <li key={person.id}>{person.name} {person.number} <button onClick={() => onDelete(person)}>delete</button></li>
        )}
        </ul>
        </>
    )
}
export default Persons;