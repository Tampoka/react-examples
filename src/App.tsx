import React from 'react';
import './App.css';
import {AutoComplete} from "./AutoCompleteData";
import {autoCompleteData} from "./data";

function App() {
    return (
        <div className="App">
            <AutoComplete data={autoCompleteData}/>
        </div>
    );
}

export default App;
