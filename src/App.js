import React, {useState} from "react";
import useUpdate from './useUpdate.js'
const App = props => {
    const [n, setN] = useState(0)
    const onClick = () => {
        setN(n + 1)
    }
    useUpdate(() => {
        console.log('n变化了')
    }, n)

    return (
        <div>
            n:{n}
            <button onClick={onClick}>+1</button>
        </div>
    )
}

export default App;
