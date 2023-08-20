import { createContext, useState ,useEffect } from 'react';
import Cookies from 'js-cookie';
import backendServerURL from "../config";

const TokenContext = createContext();
export function TokenProvider({ children }) {

    const [token, setToken] = useState('');
    // Read the isLoggedIn value from the cookie on component mount
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedToken = Cookies.get('authToken');

        const refreshToken = async () => {
            try {
                const response = await fetch(`${backendServerURL}/user/refresh-token`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${storedToken}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setToken(data.token);
                } else {
                    setToken('');
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        };

        if (storedToken !== '') {
            refreshToken();
        }
    }, []);

    useEffect(() => {
        setIsLoggedIn(token !== '');
        if (token !== '' && isLoggedIn) {
            Cookies.set('authToken', token, { expires: 1 }); // Save the authentication token to a cookie
        }
    }, [token, isLoggedIn]);


    return (
        <TokenContext.Provider value={{ token, setToken , isLoggedIn}}>
            {children}
        </TokenContext.Provider>
    );
}

export default TokenContext;