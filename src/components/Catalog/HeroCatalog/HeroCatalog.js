import React from "react";
import ConferenceTemplate from "../../Items/ConferenceTemplate";

function ItemContainer({conference}) {

    return(
      <ul className="item">
          {
              conference.map(((conference,id) => (
                  <li key={id}><ConferenceTemplate
                  id={id}
                  name={conference.name}
                  amountOfPeople={conference.amountOfPeople}
                  priceOfTicket={conference.priceOfTicket}
                  /></li>
              )))
          }
      </ul>
    );
}
const HeroCatalog = (props) => (
    <div className="items">
        <ItemContainer conference={props.conference}/>
    </div>
);

export default HeroCatalog;

