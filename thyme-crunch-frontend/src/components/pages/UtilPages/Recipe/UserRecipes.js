import Navbar from "../../../navbar/Navbar"
import { ApprovedRecipes } from './UserRecipesApi';
import React from "react";
// import '../Profile/UserProfiles.css';
import './UserRecipes.css';

function UserRecipes(){

 return(
   <>
    <Navbar/>
    <div id="maindiv">
    <div id="headerdiv">
    <h1 id="mainh1">User Recipes</h1>
    </div>
    <ApprovedRecipes/>
    </div>
   </>
)
 }

 export default UserRecipes;