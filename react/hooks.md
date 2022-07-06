# React Hooks
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
- changing a state will re-render the page, so `useEffect()` will re-render each time a state is changed
- takes an optional argument of what state to keep track of
  - an array of which states will trigger a re-render
  - empty array means page will only render once 
  - no argument means every state change will re-render the page
  
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

1. `useState()`
- manage states to avoid javascript's usual `document.querySelector()` to render something new on the page

```javascript
import {useState} from 'react'

// inside a function
const [state, setState] = useState('initial state')
```

4. `useRef()`
- used to automatically focus on the input box `inputRef.current.focus()`
- can be used to clear input with `inputRef.current.value = ''`
- can access current input value with `inputRef.current.value`
  
```javascript
import React, {useRef} from 'react'

function RefTutorial() {
    
    const inputRef = useRef(null)

    const onClick = () => {
        console.log(inputRef.current.value)
    }

    return (
        <div>
            <input type="text" placeholder="Example" ref={inputRef} />
            <button onClick={onClick}>Focus on the input</button>
        </div>
    )
}
```

1. `useLayoutEffect()`
- similar to `useEffect()`
- called before `useEffect()`
- `useEffect()` will display to the page after everything is called


6. `useImperativeHandle()`
- pass down state from parent while still contained in child component
- alter the value of a child state from a parent state without passing down as props

```javascript
import React, {useRef} from "react";

function ImperativeHandle() {
    const buttonRef = useRef(null);
    return (
        <div>
            <button onClick={() => {buttonRef.current.alterToggle()}}>Button from parent</button>
            <Button ref={buttonRef} />
        </div>
    )
}
```
imperativeHandle.js

```javascript
import React, {forwardRef, useSTate} from "react"

const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false)

    // create function that returns an object
    useImperativeHandle(ref, () => ({
        // create functions that we want to access from parent
        alterToggle() {
            setToggle(!toggle)
        }
    }))

    return (
        <>
            <button>
            Button From Child
            </button>
            {toggle && <span>Toggle</span>}
        </>
    )
})
```
Button.js

7. `useContext()`
- used to manage states instead of sending states down as props all the time
- no props needed

```javascript
import { createContext, useState } from "react"

// create context (collection of states)
export const AppContext = createContext(null)

function ContextTutorial() {
    const [username, setUsername] = useState('')
    
    return (
        <AppContext.Provider value={{ username, setUsername }}>
            <Login />
            <User />
        </AppContext.Provider>
    )
}
```
ContextTutorial.js

```javascript
import React, {useContext} from "react"
// import the context that was created
import { AppContext } from './ContextTutorial'

function User() {
    // access the wanted states from AppContext
    const { username } = useContext(AppContext)

    return (
        <h1>{username}</h1>
    )
}
```
<p class="caption">User.js</p>

```javascript
import { AppContext } from './ContextTutorial'

function Login() {
    const { setUsername } = useContext(AppContext)

    return (
        <input onChange = {(event) => {
            setUsername(event.target.value)
        }}/>
    )
}

```
Login.js