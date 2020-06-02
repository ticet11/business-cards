import React from "react";

import "./styles/main.scss";
import ContactCard from "./components/ContactCard";

export default class App extends React.Component {
    render() {
        return (
            <div className="contact-card-container">
                <ContactCard
                    firstName="Brian"
                    lastName="Kozub"
                    phoneNumber="385-555-0126"
                />

                <ContactCard
                    firstName="test"
                    lastName="test"
                    phoneNumber="555-555-0126"
                />
                <ContactCard
                    firstName="test"
                    lastName="test"
                    phoneNumber="555-555-0126"
                />
                <ContactCard
                    firstName="test"
                    lastName="test"
                    phoneNumber="555-555-0126"
                />
                <ContactCard
                    firstName="test"
                    lastName="test"
                    phoneNumber="555-555-0126"
                />
                <ContactCard
                    firstName="test"
                    lastName="test"
                    phoneNumber="555-555-0126"
                />
                <ContactCard
                    firstName="test"
                    lastName="test"
                    phoneNumber="555-555-0126"
                />
                <ContactCard
                    firstName="test"
                    lastName="test"
                    phoneNumber="555-555-0126"
                />
                <ContactCard
                    firstName="test"
                    lastName="test"
                    phoneNumber="555-555-0126"
                />
            </div>
        );
    }
}
