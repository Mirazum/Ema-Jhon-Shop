import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import'./shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart=[]
         console.log(storedCart)
        for (const id in storedCart){
             console.log(id);
             const addedProduct = products.find(product => product.id === id)
             if(addedProduct){
                const quantity = storedCart[id];
                //   console.log(quantity)
                addedProduct.quantity = quantity;
                //  console.log(addedProduct);
                savedCart.push(addedProduct)
             }
            
        }
        setCart(savedCart)
    },[products])
    
    const handelAddToCart=(product)=>{
        // console.log(product)
        const newCart = [...cart,product];
        setCart(newCart)
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
              {
                products.map(product=> <Product
                key={product.id}
                product={product}
                handelAddToCart={handelAddToCart}
                ></Product>)
              }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
               
            </div>
        </div>
    );
};

export default Shop;