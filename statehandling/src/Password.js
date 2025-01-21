import { useState } from "react"

export default function Password(){
    let [status, setStatue] = useState(false);
    return(
        <div>
            <h1>password</h1>
            <input type={status?"text":"password"} placeholder="password" className="password"></input>
            <button onClick={() => setStatue(!status)}>{status?"Hide":"Show"}</button>
        </div>
    )
}