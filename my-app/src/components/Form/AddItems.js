import Item from "../item/item";

function AddItems({onAdd}){
    let ItemName = "";
    
    const onSubmitHandler = (event)=>{
        event.preventDefault();
        onAdd(ItemName);
}
const onInputChangeHandler = (event) =>{
    ItemName = event.target.value;

}
    return(
    <div>
        <form onSubmit={onSubmitHandler}>
         <div>
            <label for="">
             Item Name
            </label>
            <input id= "my-input" onChange={onInputChangeHandler} />
            </div>  
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    </div>
    );
}

export default AddItems;