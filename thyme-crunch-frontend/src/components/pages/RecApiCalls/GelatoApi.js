import axios from "axios";
import React, {useState, useEffect } from "react";
import '../../pages/UtilPages/Profile/UserProfiles.css';

export const GelatoIng = ()=> {

   
  

    
    const [gelatoIng, setGelatoIng] = useState([]);

    const fetchGelatoIng = ()=>{
        var recipe = "black_forest_gelato_with_ganache";
        const username = sessionStorage.getItem('username');
        axios.get(`http://3.14.3.79:9090/api/v1/recipes/${recipe}/${username}`).then(res =>{
            console.log(res);
            setGelatoIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchGelatoIng();
    }, [] );

    return gelatoIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}