import React from "react";
import CardItem from './CardItem';
import "./Cards.css";

/**********************************Works Cited************************************
 * Title: React Website Tutorial - Beginner React JS Project Fully Responsive
 * Author: Brian Design
 * Date: 8/11/20 (Accessed 1/1/22)
 * Code Version: React
 * Availability: https://youtu.be/I2UBjN5ER4s
 *********************************************************************************/

export default function BeveragesCards() {
  return (
    <div className="cards">
      <CardItem
        src="images/latte.jpg"
        text="Express Espresso Latte"
        label="Latte"
        path="/latte"
      />
      <CardItem
        src="images/orange_juice.jpg"
        text="Old-Fashioned Orange Juice "
        label="Orange Juice"
        path="/orange-juice"
      />
      <CardItem
        src="images/boba.jpg"
        text="Bubbly Boba Tea"
        label="Boba Tea"
        path="/boba"
      />
      <CardItem
        src="images/punch.jpg"
        text="Summery Fruit Punch"
        label="Punch"
        path="/punch"
      />
    </div>
  );
}
