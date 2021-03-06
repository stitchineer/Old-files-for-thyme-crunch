import axios from "axios";
import React, {useState, useEffect } from "react";
import '../../pages/UtilPages/Profile/UserProfiles.css';


export const SaladIng = ()=> {

   

    const [saladIng, setSaladIng] = useState([]);

    const fetchSaladIng = ()=>{
        var recipe ="salad";
        const username = sessionStorage.getItem('username');
        axios.get(`http://3.14.3.79:9090/api/v1/recipes/${recipe}/${username}`).then(res =>{
            console.log(res);
            setSaladIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchSaladIng();
    }, [] );

    return saladIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}