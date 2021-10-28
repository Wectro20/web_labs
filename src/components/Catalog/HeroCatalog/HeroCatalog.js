import React from "react";
import ConferenceTemplate from "../../Items/ConferenceTemplate";

function ItemContainer(props) {
    let conference = props.conference;

    return(
      <ul className="item">
          {
              conference.map(((conference,id) => (
                  <li key={id}><ConferenceTemplate
                  name={conference.name}
                  amountOfPeople={conference.amountOfPeople}
                  priceOfTicket={conference.priceOfTicket}
                  /></li>
              )))
          }
      </ul>
    );
}
const Hero = (props) => (
    <div className="items">
        <ItemContainer conference={props.conference}/>
    </div>
);

export default Hero;