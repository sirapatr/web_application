function Unvote(params) {

    function sub() {
        if (params.set > 0){
            params.call(params.set-1)
        }else{
            alert("Cannot unvote")
        }
        
    }
    
    return(
        <div>
            <button onClick={sub}>
                Click to unvote
            </button>
        </div>
    )
}

export default Unvote