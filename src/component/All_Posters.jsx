import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getMoviePoster} from '../redux/slice/movie_poster'
import Single_Poster_Div from "./Single_Poster_Div";
import '../assets/css/All_Posters.css'

const All_Posters = () => {

    const dispatch = useDispatch()
    const posters =  useSelector((state) => state.movie_poster.posterData)

   


    useEffect(() => {
        dispatch(getMoviePoster());

    },[dispatch])





    return (
        <>
        <div className="main_poster_div">
            <div className="main_heading">

                <h2>All Movie Poster</h2>

            </div>
        <div className="container">
            <div className="row">
                {posters.map((poster)=> {
                    return(
                        <Single_Poster_Div 
                        key={poster.imdbID} 
                        Title={poster.Title} 
                        Img={poster.Poster} 
                        Year={poster.Year}
                        Id = {poster.imdbID}
                        Price = {poster.price}
                         />
                    )
                })}
            </div>
            </div>
        </div>
        
        </>
    )
}

export default All_Posters;