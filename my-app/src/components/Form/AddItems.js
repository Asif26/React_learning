function AddItem(){
    const onSubmitHandler = () => {

    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label For="">Item Name</label>
                    <input type="text" name="" id="my-input" />
                </div>
                <div>
                    <button  type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default AddItem ; 