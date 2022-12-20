const Filter = ({onChange, filter}) =>{
    return(
        <div>
            filter countries:
            <input onChange={onChange} value={filter}/>
        </div>
    )
}
export default Filter;