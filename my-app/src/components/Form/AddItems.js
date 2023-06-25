function AddItem({onAdd}){
    let ItemName = ""
    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(ItemName)
        onAdd(ItemName);

    }
   const onInputChangeHandler = (event) => {
        ItemName = event.target.value;

    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label For="">Item Name</label>
                    <input onChange={onInputChangeHandler} type="text" name="" id="my-input" />
                </div>
                <div>
                    <button  type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default AddItem ; 