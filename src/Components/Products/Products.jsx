import React, { useState, useEffect } from 'react';


export default function Products() {

    const [products, setProducts] = useState({});


    useEffect(() => {
        fetch(`https://dummyjson.com/products`)
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <>
            <div>
                <h1>Products</h1>
                <div className='main'>
                    {products.products?.map(item =>
                        <div key={item.id} className='main-item'>

                            <div style={{ display: 'flex' }}>
                                <img src={`${item.thumbnail}`} alt={item.title} className="product-img" />

                                <div className='product-detail'>
                                    <p>Product name: {item.title} </p>
                                    <p>{item.description}</p>
                                    <p>Brand: {item.brand}</p>
                                    <p>Category:{item.category}  </p>
                                    <p>{item.description}</p>
                                    <div>
                                        <span> Price: {item.price}  Discount: {item.discountPercentage} %  Stock:{item.stock}</span>
                                        <p>Raiting:{item.rating}</p>
                                    </div>
                                </div>
                            </div>
                          
                                
                                <ul style={{paddingLeft:'5px'}} >
                                
                                    {item.images?.map(it =>
                                        <li key={crypto.randomUUID()} style={{ display: 'inline-block' ,marginRight:'3px', padding:'2px'}}  ><img src={`${it}`} alt={item.title} style={{width:'10vw'}}/></li>)}
                                </ul>
                            

                        </div>

                    )}
                </div>
            </div>
        </>
    )


}