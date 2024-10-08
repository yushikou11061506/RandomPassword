import React, { useState } from 'react';
import './App.css';


const App = () => {
    const [password, setPassword] = useState('');

    const generatePassword = () => {
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const sizeElement = document.getElementById('size');
        const length = parseInt(sizeElement.value, 10);
        let newPassword = "";
        for (let i = 0; i < length; i++) {
            newPassword += str.charAt(Math.floor(Math.random() * str.length));
        }
        setPassword(newPassword);
    };

    return (
        <div>
            <h1>Generate Password</h1>
            <input type="number" defaultValue="8" min="4" id="size" />
            <input type="button" value="Generate Password" id="generate" onClick={generatePassword} />
            <p>{password}</p>
        </div>
    );
};

export default App;
