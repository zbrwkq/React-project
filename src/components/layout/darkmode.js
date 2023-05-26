import React, { useState, useEffect } from 'react';

function DarkMode() {
    const [theme, setTheme] = useState('dark');

    // Appelé par le toggle
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    // Hook. Met à jour la classe selon valeur actuelle du thème. 
    // Appelé à chaque changement du thème
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        /* Creating a `div` element with a class name that is a combination of "App" and the current
        value of the `theme` state variable. This allows for conditional styling based on the
        current theme (either "light" or "dark"). */
        <div className={`App ${theme}`}>
            <div className="darkmodeButton">
                <i className="fas fa-sun"></i>
                &nbsp;&nbsp;&nbsp;
                <input type="checkbox" id="tooglenight" className="cbx hidden" onClick={toggleTheme} />
                <label htmlFor="tooglenight" className="switch"></label>
                &nbsp;&nbsp;&nbsp;
                <i className="fas fa-moon"></i>
            </div>
        </div>
    );
}
export default DarkMode;