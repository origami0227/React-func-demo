import {useEffect, useState} from "react";

const useUpdate = (fn, dep) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        setCount(count + 1)
    }, [dep])
    useEffect(() => {
        if (count > 1) {
            fn()
        }
    }, [count])
}
export default useUpdate