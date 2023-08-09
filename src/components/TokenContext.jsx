// TokenContext.js
import { createContext, useState ,useEffect } from 'react';

const TokenContext = createContext();
export function TokenProvider({ children }) {
    const [token, setToken] = useState('');
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const [isLoggedIn, setIsLoggedIn] = useState(storedIsLoggedIn ? JSON.parse(storedIsLoggedIn) : false);

    useEffect(() => {
        setIsLoggedIn(token !== '');
        console.log('Setting isLoggedIn in useEffect');
        console.log(token)
    }, [token]);

    // Load isLoggedIn state from local storage on component mount
    useEffect(() => {
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        console.log('on component mount isLoggedIn is '+ storedIsLoggedIn);
        if (storedIsLoggedIn) {
            setIsLoggedIn(JSON.parse(storedIsLoggedIn));
        }
    }, []);

    // Save isLoggedIn state to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
        console.log('saving isLoggedIn in useEffect as '+ isLoggedIn);
    }, [isLoggedIn]);

    return (
        <TokenContext.Provider value={{ token, setToken , isLoggedIn}}>
            {children}
        </TokenContext.Provider>
    );
}

export default TokenContext;
