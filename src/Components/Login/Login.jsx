import React, { useState, useEffect } from 'react';


export default function Login() {
    const [dataLogin, setDataLogin] = useState('');
    const [user, setUser] = useState("dpettegre6");
    const [password, setPassword] = useState("YVmhktgYVS");

    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: { user }, password: { password } })
    }

    useEffect(() => {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'dpettegre6',
                password: 'YVmhktgYVS',
            })
        })
            .then(res => res.json())
            .then (data => setDataLogin(data))
            .then(console.log);
    }, [])
    console.log(dataLogin);




    return (
        <div>
            <h1> Welcome : <span style={{color:'orange'}}>{dataLogin.firstName} {dataLogin.lastName}</span> </h1>
        </div>

    )
}