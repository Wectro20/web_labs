import React from "react";

const CartCheckout = () => {
    return(
        <div className="cartContainer">
            <h1>Checkout</h1>
            <div className="cartInput">
                <div className="cartNameInput">
                    <div>
                        <p>First Name</p>
                        <input id="firstNameInput"  type="text"/>
                    </div>
                    <div>
                        <p>Second Name</p>
                        <input id="SecondNameInput"  type="text"/>
                    </div>
                </div>
                <div className="cartDetailInfo">
                    <div>
                        <p>Email</p>
                        <input id="EmailInput"  type="text"/>
                    </div>
                    <div>
                        <p>Phone</p>
                        <input id="PhoneNumberInput"  type="text"/>
                    </div>
                </div>
                <div className="Address">
                    <p>Address</p>
                    <input id="PhoneNumberInput"  type="text"/>
                </div>
            </div>
            <div className="cartButton">
                <button className="goBack">Go Back</button>
                <button className="continue">Continue</button>
            </div>
        </div>
    );
}

export default CartCheckout;