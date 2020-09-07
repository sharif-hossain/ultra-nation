import React from 'react';

const Cart = (props) => {
    console.log(props)
    let cart = props.cart;
    console.log(cart)
    let totalPop = 0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        totalPop = totalPop + country.population;
        
    }
    // const total = cart.reduce((sum,country) =>sum +country.population,0)
    
    return (
        <div>
            <h4>This is cart: {cart.length}</h4>
    <h4>population :{totalPop}</h4>
        </div>
    );
};

export default Cart;