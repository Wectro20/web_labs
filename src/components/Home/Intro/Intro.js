import React,{useState} from "react";
import "./intro.css"
import ConferenceTemplate from "../../Items/ConferenceTemplate";
import "./SMButton.css";
import "./animation.css";


const Intro = (props) => {
    const [count, setCount] = useState(3);

    return(
        <div className="items">
            <ItemContainer conference={props.conference} count = {count}/>
            <div className="aaa">
                <button onClick={() => setCount(count + 4)} className="btn_more">Show more</button>
            </div>
        </div>
    );
};


function ItemContainer({conference, count}) {

    return(
        <ul className="ssss">
            {
                conference.slice(0, count).map(((conference,id) => (
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

export  default Intro;