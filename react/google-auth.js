import { useContext, useEffect, useRef, useState } from "react";
import jwtDecode from "jwt-decode";
import { UserContext } from "../App";

export default function Login() {
    const {user, setUser} = useContext(UserContext);

    const divRef = useRef(null);
    const [displayLogin, setDisplayLogin] = useState(true);

    function handleSignOut(event) {
        setUser({});
        localStorage.clear();
        console.log("Logging out")
        setDisplayLogin((prev) => true);
    }

    function handleCallbackResponse(response) {
        console.log(response.credential)
        let userObject = jwtDecode(response.credential)
        setUser(userObject)
        setDisplayLogin((prev) => false);
        localStorage.setItem('user', JSON.stringify(userObject));
    }

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
            return;
        }

        if(divRef.current) {
            window.google.accounts.id.initialize({
                client_id: '',
                callback: handleCallbackResponse
            })
        };

        window.google.accounts.id.renderButton(divRef.current, {
            theme: 'filled_blue',
            size: 'medium',
            type: 'standard',
            text: 'continue_with',
        });

    }, [divRef.current])

    return (
        <div>
            {/* Display sign out button */}
            {displayLogin && <div ref={divRef} />}
            {
                Object.keys(user).length !== 0 && 
                <button onClick={(e) => handleSignOut(e) }>Sign Out</button>
            }
            
            
            {/* Display User info */}
            {
                user && 
                <div>
                    <img src={user.picture} />
                    <h3>{user.name}</h3>
                </div>
            }
        </div>
        

    );
}
