const Form = ({onSubmit, onNameChange, onNumberChange, newPhoneNumber, newName}) =>{
    return(
        <form onSubmit={onSubmit}>
        <h2>add a new</h2>
        <div>
          name: <input value={newName} onChange={onNameChange} />
        </div>
        <div>number: <input value={newPhoneNumber} onChange={onNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}
export default Form;