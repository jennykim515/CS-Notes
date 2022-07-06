1. `useReducer()`
- used to reduce the number of calls to `useState()`
- combine multiple states into one statement

```javascript
import React, {useReducer} from "react"

const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText }
        case "toggleShowText":
            return { count: state.count, showText: !state.showText }
        default:
            return state
    }

    const Reducer = () => {
        const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})
        return (
            <div>
                <h1>{state.count}</h1>
                <button onClick={() => {
                    dispatch({ type: "INCREMENT" })
                    dispatch({ type: "toggleShowText" })
                }}>
            </div>
        )
    }
}
```

2. `useEffect()`
- specify when the page should render
- changing a state will re-render the page, so `useEffect()` will re-render each time state is changed
- takes an argument of what state to keep track of
  - an array of states that will trigger a re-render
  
```javascript

import axios from "axios"
import {useEffect} from "react"

function EffectTutorial() {
    const [data, setData] = useState('')

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[0].email)
            })
    }, [])
    return <div>Hello World {data[0].email}</div>
}
```