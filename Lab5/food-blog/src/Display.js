function Display(params) {
    
    function Checknum() {
        if (params.number === 10){
            return "MAX"
        }
        if (params.number === 0){
            return "MIN"
        }
        return params.number
    }

    return(
        <h2 id = "helpMe">
                {Checknum()}
        </h2>
    )
}

export default Display