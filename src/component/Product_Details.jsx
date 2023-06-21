import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import '../assets/css/Product_Details.css';
import { BsFillBox2HeartFill, BsFillCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/slice/addToCartSlice";

const ProductDetails = () => {
  const [quantity, setQuantity]=useState(1)
  const cartData = useSelector((state) => state.cartItems.cart)
  const pData = useSelector((state) => state.movie_poster.posterData)

  const navigate = useNavigate()
    const location = useLocation();
   const {title} = useParams()
   const dispatch = useDispatch()


   


   const addtoCartHandler = (product) => {
   
        // if(cartData.length !== 0){
        //   //console.log(cartData.length)
        //     const data = cartData.findIndex((p)=>p.imdbID === cartData.imdbID)
        //     // if(dataExists(product.imdbID)){
        //       if(product[data]=== cartData[data]){
        //       console.log(product[data])
        //       setQuantity(quantity+ 1)
               
        //       // navigate("../Cart", {state: product})
            
        //       // break
        //     } 
        //     dispatch(addCart(product));
        //     navigate("../Cart", {state: product})
        //     console.log(cartData)
        // }else {
          dispatch(addCart(product));
          navigate("../Cart", {state: product})
        // }
      
    
  
   
   
   }
   function dataExists(imdbID) {
    return cartData.some(function(el) {
      return el.imdbID === imdbID;
    }); 
  }
   const quantityChange=(e)=> {

    setQuantity(cartData.quantity);

   }


    return(
        <>

<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
    <li className="breadcrumb-item">Product Details</li>
    <li className="breadcrumb-item active" aria-current="page">{title}</li>
  </ol>
</nav>

        
        


       <div className="container">
        
            <div className="row product_details_main">
              <div className="col-md-6 fig_img_section">

                <img src={location.state.Poster} alt="imgp"/>

              </div>

              <div className="col-md-6 details_sec">

                <h2>{location.state.Title}</h2>
                <p>Year: {location.state.Year}</p>
                <p>Type: {location.state.Type}</p>
                <h4 className="mb-4">Price: ${location.state.price}</h4>

                <h6>Quantity:</h6>
                <div className="input-group input-group-sm mb-3 quantity_div">
                  
  <button className="btn btn-outline-secondary" type="button">-</button>
  <input type="text" className="form-control" value={quantity} onChange={quantityChange} />
  <button className="btn btn-outline-secondary" type="button">+</button>
</div>
                <div className="btn-section ">
                <button className="btn  btn-dark mt-4 "><i><BsFillBox2HeartFill/></i>Add to Wishlist</button>
                <button className="btn  btn-dark mt-4" onClick={()=> addtoCartHandler(location.state

)}><i><BsFillCartFill/></i>Add to Cart</button>
                </div>

              </div>
              
            </div>

       </div>


        </>
    )
}

export default ProductDetails;