import React from "react";

import ContactCard from "./components/ContactCard";

function App() {
    return (
        <div className="App">
            <ContactCard
                firstName="Brian"
                lastName="Kozub"
                phoneNumber="385-722-0126"
            />
        </div>
    );
}

export default App;
