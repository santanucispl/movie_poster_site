import React from "react";
import '../assets/css/Single_cart.css';
import { AiFillCloseCircle } from "react-icons/ai";
import { removeCart, addCart } from '../redux/slice/addToCartSlice'
import { useDispatch } from "react-redux";


const CartSingle = (prop) => {

   
    const dispatch = useDispatch()
    

    const removeCartHandler = (data) => {
        
        dispatch(removeCart(data))
    }

    //    const addQuantityHandler = ( data) => {
    //     dispatch(addQuantity(data))
    //    }

    const updateQuantityHandler = (data) => {
       
    }



    return (
        <>
            <div className="container cart_single_main my-4 p-2 bg-light " >
                <div className="row d-flex  align-items-center" key={prop.id}>
                    <div className="col-md-2 single_cart_fig">
                        <img src={prop.pimg} alt="pimg" />
                    </div>
                    <div className="col-md-4">
                        <h5 className="text-left">{prop.title}</h5>
                    </div>

                    <div className="col-md-2">
                        <h5 className="text-primary">${prop.price}</h5>
                    </div>
                    <div className="col-md-3">
                    <div className="input-group input-group-sm mb-3 quantity_div">
                  
                  <button className="btn btn-outline-secondary" type="button">-</button>
                  <input type="text" className="form-control" value={prop.quantity} onChange={updateQuantityHandler} />
                  <button className="btn btn-outline-secondary" type="button">+</button>
                </div>
                    </div>
                    <div className="col-md-1">
                        <button className="btn " onClick={() => removeCartHandler(prop.id)} >
                            <i className="text-danger"><AiFillCloseCircle /></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartSingle;