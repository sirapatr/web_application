function Vote(params) {

    function add() {
        if (params.set < 10){
            params.call(params.set+1)
        }else{
            alert("Cannot vote more")
        }
        
    }
    
    return(
        <div>
            <button onClick={add}>
                Click to vote
            </button>
        </div>
    )
}

export default Vote