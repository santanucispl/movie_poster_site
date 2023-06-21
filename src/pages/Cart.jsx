import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import CartSingle from '../component/Cart_single';
const Cart = () => {

  const location = useLocation()


  const cartData = useSelector((state) => state.cartItems.cart)
 




    return(
        <>
        <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
    <li className="breadcrumb-item active" aria-current="page">Cart</li>
  </ol>
</nav>


{cartData.map((data,index)=>{
  return(
  <CartSingle key={index} id={data.imdbID} title={data.Title} pimg={data.Poster} price={data.price} quantity={data.quantity}/>
  
  )
})}



        </>
    )
}

export default Cart;