import React, { useState, useEffect } from 'react';

export default function User() {
    const [user, setUser] = useState('');

    useEffect(() => {
        fetch('https://dummyjson.com/users/7')
            .then(response => response.json())
            .then(data => setUser(data))
    }
        , [])
    if (!user) {
        return <h1>Loading  data....</h1>
    }

const { firstName, lastName, email, phone, username, address, bank } = user;
const changestring= ()=>{
 let stxt=bank.cardNumber.slice(bank.cardNumber.length-3);
 let padded=stxt.padStart(bank.cardNumber.length,"*");
 return padded
}
    return (
        <div className="cuser">
            <h1>User data:</h1>
            <p>Name : {firstName}  {lastName}</p>
            <p>e-mail: {email}  phone: {phone}</p>
            <p>User name: {username}</p>
            <p>Adress : {address.address} , {address.city}</p>
            <p>Credit card: {changestring()}   expire: {bank.cardExpire}</p>
        </div>
    )

}