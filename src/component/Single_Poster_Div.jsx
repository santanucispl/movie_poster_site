import React from "react";
import { useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import '../assets/css/Single_Poster_Div.css'


const Single_Poster_Div = (prop) => {

   
    const posters =  useSelector((state) => state.movie_poster.posterData)
    const navigate = useNavigate()




 

         const postDetailsHandler = (id) => {
            //console.log(posters);
           const postData = posters.find((data) =>
           id === data.imdbID);
           //console.log(postData);
            navigate(`/Product_Details/${postData.Title}`, {state: postData})

           

         }


    return(
        <>
        <div className="col-md-3 col-sm-6 col-xs-12 p-4 single_poster_main" key={prop.Id}>
            
            <div className="single_poster_fig">
            <img src={prop.Img} className="" alt="img1" />
            </div>
            
            <div className="single_poster_details text-center">
            <h4>{prop.Title}</h4>
            <p>{prop.Year}</p>
            <h5 className="text-danger">${prop.Price}</h5>

            <div className="btn_div d-flex justify-content-center mb-3">
                
                <button className="btn btn-dark " 
                onClick={() => postDetailsHandler(prop.Id)}>View More</button>
            </div>
            </div>
        </div>
        
        </>
    )
}

export default Single_Poster_Div;