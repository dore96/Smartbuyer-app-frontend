// TokenContext.js
import { createContext, useState ,useEffect } from 'react';
import Cookies from 'js-cookie';

const TokenContext = createContext();
export function TokenProvider({ children }) {

    const storedToken =  Cookies.get('authToken');
    const [token, setToken] = useState(storedToken);

    // Read the isLoggedIn value from the cookie on component mount
    const storedIsLoggedIn = Cookies.get('isLoggedIn') === 'true';
    const [isLoggedIn, setIsLoggedIn] = useState(storedIsLoggedIn);

    useEffect(() => {
        setIsLoggedIn(token !== '');
        // Save isLoggedIn state to the cookie whenever it changes
        Cookies.set('isLoggedIn', isLoggedIn.toString(), { expires: 1 });
        // Save the authentication token to a cookie
        Cookies.set('authToken', token, { expires: 1 });
    }, [token, isLoggedIn]);

    return (
        <TokenContext.Provider value={{ token, setToken , isLoggedIn}}>
            {children}
        </TokenContext.Provider>
    );
}

export default TokenContext;
