import React from "react";

import phone from "../images/phone.png";

export default function ContactCard(props) {
    const firstName = props.firstName;
    const lastName = props.lastName;
    const phoneNumber = props.phoneNumber;
    return (
        <div className='contact-card' >
            <img style={{ width: "50px" }} src={phone} alt="" />
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{phoneNumber}</p>
        </div>
    );
}
