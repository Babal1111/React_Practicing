import { useState } from "react";

export default function Theme() {
    const [theme, setTheme] = useState('grey');

    const toggle = () => {
        setTheme(theme === 'grey' ? 'white' : 'grey');
    };

    return (
        <div style={{ backgroundColor: theme, width: '100%', height: '100vh', textAlign: 'center' }}>
            <h1>This is a Theme page</h1>
            <button onClick={toggle}>Toggle Theme</button>
        </div>
    );
}
