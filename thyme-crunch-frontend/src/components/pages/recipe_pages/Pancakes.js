import React from "react"
import Navbar from "../../navbar/Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import {PancakesIng} from '../RecApiCalls/PancakesApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function Pancakes (){
    return(
    <>
    <Navbar/>
    <div id="maindiv">
    <img src="images/pancakes.jpg" alt="pancakes" />
    
    <h1>Fluffy Buttermilk Pancakes</h1>
    <div id="userdiv">
    <p>Towering and topped with butter, these breakfast classics are sure to make your morning sweeter!</p>
    <hr/>
    </div>
    <PancakesIng/>
    <RecipeButton/>
    <EmailButton/>
    </div>
    </>
    )
        

   
}
export default Pancakes;
