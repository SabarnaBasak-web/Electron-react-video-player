import React, { createContext, useState } from 'react';

export const UrlContext = createContext([]);

export const UrlProvider = (props) => {    
    const [url, setURL] = useState({
        currentURL: '',
        allURL: []
    });
    
    return (
        <UrlContext.Provider value={{url, setURL}}>
            {props.children}
        </UrlContext.Provider>
    )
}

