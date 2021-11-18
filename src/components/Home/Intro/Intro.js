import React,{useState, useEffect} from "react";
import "./intro.css"
import ConferenceTemplate from "../../Items/ConferenceTemplate";
import "./SMButton.css";
import "./animation.css";
import Loading from "../../Loading/Loading"
import axios from "axios";


const Intro = () => {

    const [conference, setConference] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/conference`).then((result) => {
            setConference(result.data)
        })
    },[]);

    return(
        <div className="items">
            {conference ? <ButtonShowMore/>:<Loading/>}

        </div>
    );

    function ButtonShowMore(){
        const [count, setCount] = useState(3);
        return(
            <React.Fragment>
                <ItemContainer conferences={conference} count = {count}/>
                <div className="aaa">
                    <button onClick={() => setCount(count + 4)} className="btn_more">Show more</button>
                </div>
            </React.Fragment>

        );
    }
};




function ItemContainer(props) {

    return(
        <ul className="ssss">
            {
                props.conferences.slice(0, props.count).map(((conference,id) => (
                    <li key={id}><ConferenceTemplate
                        id={id}
                        name={conference.name}
                        amount={conference.amount}
                        price={conference.price}
                    /></li>
                )))
            }
        </ul>
    );
}

export  default Intro;