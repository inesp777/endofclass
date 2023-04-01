import React, { useState, useEffect } from 'react';

export default function Card() {
    const [card, setCard] = useState();

    useEffect(() => {
        fetch('https://dummyjson.com/carts/7')
            .then(response => response.json())
            .then(data => setCard(data))
    }, []);

    if (!card) {
        return <h1>Loading data..</h1>
    }

    return (
        <div>
            <h1>Carts:</h1>
            <table style={{width:'60%'}}>
                <caption> Carts - products - total  </caption>
                <tr style={{ backgroundColor: 'cadetblue', borderStyle: 'solid', color: 'white' }}>

                    <th> Title </th>
                    <th>   Price   </th>
                    <th>   Quantity   </th>
                    <th>   Total   </th>
                    <th>Discounted price</th>
                </tr>

                {card.products?.map(itm =>
                    <tr key={itm.id}>
                        <td> {itm.title} </td>
                        <td> {itm.price} </td>
                        <td> {itm.quantity} </td>
                        <td> {itm.total} </td>
                        <td> {itm.discountedPrice} </td>
                    </tr>)
                }

                <tr style={{ backgroundColor: 'cadetblue', borderStyle: 'solid', color: 'white' }}>
                    <th colSpan={3}>TOTAL:</th>
                    <td>{card.total}</td>
                    <td>{card.discountedTotal}</td>
                </tr>
            </table>
        </div>
    )

}