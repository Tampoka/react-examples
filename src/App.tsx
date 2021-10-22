import React from 'react';
import './App.css';
import {AutoComplete} from "./AutoComplete/AutoCompleteData";
import {autoCompleteData} from "./AutoComplete/data";

function App() {
    return (
        <div className="App">
            <AutoComplete data={autoCompleteData}/>
        </div>
    );
}

export default App;
