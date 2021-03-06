import React from "react"
import Navbar from "../../navbar/Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { FruitIng } from '../RecApiCalls/FruitApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function Fruit (){
    return(
    <>
    <Navbar/>
    <div id="maindiv">
    <img src="images/fruit.jpg" alt="fruit" />
    
    <h1>Fresh Fruit Stars</h1>
    <div id="userdiv">
    <p>Sweet and cute fruit stars have all the goodness of fruits with all the fun of shapes!</p>
    <hr/>
    </div>
    <FruitIng/> 
    <RecipeButton/>
    <EmailButton/>
    </div>
    </>
    )
    
}
export default Fruit;
