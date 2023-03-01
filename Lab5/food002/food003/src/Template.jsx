import { useState } from "react"
import Display from "./Display"
import Unvote from "./Unvote"
import Vote from "./Vote"

function Template_block(params) {

    const [value,setValue] = useState(0);
    
    function Callback(params) {
        setValue(params)
    }

    return(
        <div className="block">
            <part1>
                <div>
                    <h2 id = "text">
                        {params.text}
                    </h2>
                    <b id ="text2">
                        {params.text2}
                    </b>
                    <p id ="text3">
                        {params.text3}
                    </p>
                </div>
                <img src={params.img}/>
            </part1>
            <part2>
                <Vote set ={value} call ={Callback}></Vote>
                <Display number = {value}></Display>
                <Unvote set ={value} call={Callback}></Unvote>
            </part2>
        </div>
    )
}
export default Template_block