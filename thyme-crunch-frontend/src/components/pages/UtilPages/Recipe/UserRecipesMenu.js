import { RecipeButton1 } from "../../../buttons/RecipeButton1";
import {UserRecipesButton} from "../../../buttons/UserRecipesbutton";
import {PendingRecipesButton} from "../../../buttons/PendingRecipesButton";
import {AddRecipesButton} from '../../../buttons/AddRecipeButton';
import Navbar from "../../../navbar/Navbar";
import './RecipeMenu.css';
import React from "react";



function RecipesMenu() {
    return (
       <>
       <div className='recipDiv' >
            <Navbar/>
            <RecipeButton1/>
            <UserRecipesButton/>
            <PendingRecipesButton/>
            <AddRecipesButton/>
        </div>
       </>
    )
}

export default RecipesMenu;
