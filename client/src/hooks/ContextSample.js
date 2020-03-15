import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('black');
const ContextSample = () => {
    const theme = useContext(ThemeContext);
    const style = {
        width: '48px',
        height: '48px',
        background: theme
    };
    return <div style={style} />;
};

export default ContextSample;