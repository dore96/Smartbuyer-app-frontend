// TokenContext.js
import { createContext, useState ,useEffect } from 'react';

const TokenContext = createContext();
export function TokenProvider({ children }) {
    const [token, setToken] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(token !== '');
    }, [token]);

    return (
        <TokenContext.Provider value={{ token, setToken , isLoggedIn}}>
            {children}
        </TokenContext.Provider>
    );
}

export default TokenContext;
